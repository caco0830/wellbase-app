import React, {useContext, useState, useEffect, useLayoutEffect} from 'react';
import AppContext from '../../AppContext';
import createFood from '../../Utilities/createFood';
import {getNutrients} from '../../Services/foodDataAPI';

function FoodDetails(props) {
//TODO: Show/Hide nutrients
//TODO: Add quantity picker
//TODO: Add to list for diary
//TODO: Diary will be the main screen, foods will be added from there. One button under each diary caterogry

    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [nutrients, setNutrients] = useState({});
    const [portionSize, setPortionSize] = useState();
    const [food, setFood] = useState();  

    const foodId = props.match.params.foodId;
    let portionSizeOptions = '';
    
    const diaryItem = {
        foodId: foodId,
        quantity: quantity,
        category: 'breakfast',
        nutrients
    }
    
    //Context
    const {results, setResults} = useContext(AppContext); 
    const {diary, setDiary} = useContext(AppContext); 
    

    useEffect(() => {
        try{
            setFood(results.find(item => item.id === foodId));
            

        }catch(err){
            setError(true);
        }
    }, []); 

    const renderPortionSizeOptions = (item) => {

        return item.portions.map(item => {

            return (
                <option value={item.label}>{item.label}</option>
                );
        });
    }

    

    useEffect(() => {
        try{
            if(food != undefined){
            portionSizeOptions = renderPortionSizeOptions(food);
            setPortionSize(food.portions[0].label);
            }
            
        }catch(err){
            setError(true);
        }
    }, [food]);
    
    const addToDiary = () => {
        let temp = diary || [];
        temp.push(diaryItem);
        setDiary(temp);
    }

    // const getNutrients = () => {
    //     nutrients = getNutrients(foodId, );
    // }
    
    //console.log(food);

    return (error ? <div>Error</div>:
            !food ? <div>Include Loading Screen Here</div> : <div className="FoodDetails"> 
            {/* TODO: Include a loding screen where indicated */}
            <div>{food.name}</div>
            <div>Brand: {food.brand}</div>
            <label htmlFor="portion-size">Portion Size: </label>
            <select name="portion-size" className="FoodDetails__portionSize" onChange={e => setPortionSize(e.target.value)}>
                {portionSizeOptions}
            </select>
            <br/>
            <label htmlFor="quantity">Quantity: </label>
            <input type="number" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} min="1"/>
            <div>Calories: {food.nutrients.calories.value} {food.nutrients.calories.unit} </div>
            <div>Protein: {food.nutrients.protein.value} {food.nutrients.protein.unit} </div>
            <div>Carbs: {food.nutrients.carbs.value} {food.nutrients.carbs.unit} </div>
            <div>Fat: {food.nutrients.fat.value} {food.nutrients.fat.unit} </div>
            <button className="FoodDetails__add" onClick={addToDiary}>Add</button>
            <br/>
        </div>
    );

}

export default FoodDetails;