import React from 'react';
import './ResultCard.css';
import {Link} from 'react-router-dom';

function ResultCard(props) {

    console.log(props);
    return (
        <Link to={`/food/${props.foodItem.id}`}>
            <div className="ResultCard">
                <div>Name: {props.foodItem.name}</div>
                <div>Brand: {props.foodItem.brand}</div>
                <div>Calories: {props.foodItem.nutrients.calories.value} {props.foodItem.nutrients.calories.unit} </div>
                <div>Protein: {props.foodItem.nutrients.protein.value} {props.foodItem.nutrients.protein.unit} </div>
                <div>Carbs: {props.foodItem.nutrients.carbs.value} {props.foodItem.nutrients.carbs.unit} </div>
                <div>Fat: {props.foodItem.nutrients.fat.value} {props.foodItem.nutrients.fat.unit} </div>
            </div>
        </Link>
    );
}

export default ResultCard;