import React, {useState, useContext} from 'react';
import AppContext from '../../AppContext';

function Diary(props) {
    /*
     * There will be 4 different categories: breakfast, lunch, dinner, snacks 
     * 
     * - Each category will have its own 'add food' button
     * - the button will pass the category as a prop
     * 
     * - each added food will be displayes under the category
     * - clicking on the food item will pass the foodId as a prop to the food details page
     * - will also pass a prop letting the component that it needs to be on edit mode
     * - saving on edit mode will update the item on the diary instead of creating a new item
     * 
     * 
     * 
     */
    const {diary, setDiary} = useContext(AppContext);


    return (
        <div className="Diary">
            {
                !diary ? '' : 
                diary.map(item => {
                    return <div>{item.foodId}</div>
                })
            }
        </div>
    );
}

export default Diary;