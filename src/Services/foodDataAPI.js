import config from '../config';
import createFood from '../Utilities/createFood';

export async function searchFood(searchTerm){
    let foods = [];
    
    await fetch(`${config.API_ENDPOINT}?ingr=${searchTerm}&app_id=${config.APP_ID}&app_key=${config.APP_KEY}`,
        {
            method: 'GET',
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error;
                });
            }
            return res.json();
        })
        .then(data => {
            //console.log(data.hints);
            data.hints.forEach((value, index) => {
                foods.push(createFood.generateFood(value));
            });
            
        })
        .catch(error => {
            //console.error(error);
        });

    return foods;
}

export async function getNutrients(foodId, unit, quantity) {
    let body = {
        ingredients: [{
            quantity: quantity,
            measureURI: unit,
            foodId: foodId
        }]
    }

    const response = await fetch(`${config.API_NUTRIENTS_ENDPOINT}app_id=${config.APP_ID}&app_key=${config.APP_KEY}`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            //console.log(res)
            if(!res.ok) {
                return res.json().then(error => {
                    throw error;
                });
            }
            return res.json();
        })
        .then(data => {
            //console.log(data);
            return createFood.generateNutrients(data);
        })
        .catch(error => {
            console.error(error)
        });

        return response;
}