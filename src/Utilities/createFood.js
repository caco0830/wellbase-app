const createFood = (item) => {
    //console.log(item);

    return {
        id: item.food.foodId,
        name: item.food.label,
        brand: item.food.brand,
        nutrients: {
            calories: {
                value: Math.round(item.food.nutrients.ENERC_KCAL), 
                unit:"kcal"
            },
            protein: {
                value: Math.round(item.food.nutrients.PROCNT), 
                unit:"g"
            },
            carbs: {
                value: Math.round(item.food.nutrients.CHOCDF), 
                unit:"g"
            },
            fat: {
                value: Math.round(item.food.nutrients.FAT), 
                unit:"g"
            },

        }
    };
}

export default createFood;