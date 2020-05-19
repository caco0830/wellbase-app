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
            console.log(data.hints);
            data.hints.forEach((value, index) => {
                //console.log(value, index);
                foods.push(createFood(value));
            });
        })
        .catch(error => {
            console.error(error);
        });

    return foods;
}