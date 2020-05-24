const createFood = {
    //console.log(item);
    generateFood(item){
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

            },
            portions: item.measures.map((m) => {
                return {
                    label: m.label,
                    uri: m.uri
                }
            })
        };
    },
    generateBlankFood(){

        return {
            id: '',
            name: '',
            brand: '',
            nutrients: {
                calories: {
                    value:0, 
                    unit:"kcal"
                },
                protein: {
                    value: 0, 
                    unit:"g"
                },
                carbs: {
                    value: 0, 
                    unit:"g"
                },
                fat: {
                    value: 0, 
                    unit:"g"
                },

            },
        };


    }
}



export default createFood;