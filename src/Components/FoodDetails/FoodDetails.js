import React, {useContext} from 'react';
import AppContext from '../../AppContext';

function FoodDetails(props) {

    const {results, setResults} = useContext(AppContext);
    const foodId = props.match.params.foodId;

    const food = results.find(item => item.id === foodId);


    return (
        <div className="FoodDetails">
            <div>{food.name}</div>
            <div>Brand: {food.brand}</div>
            <div>Calories: {food.nutrients.calories.value} {food.nutrients.calories.unit} </div>
            <div>Protein: {food.nutrients.protein.value} {food.nutrients.protein.unit} </div>
            <div>Carbs: {food.nutrients.carbs.value} {food.nutrients.carbs.unit} </div>
            <div>Fat: {food.nutrients.fat.value} {food.nutrients.fat.unit} </div>
            <button className="FoodDetails__add">Add</button>
        </div>
    );



}

export default FoodDetails;