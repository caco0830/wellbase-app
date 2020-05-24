import React, {createContext, useReducer} from 'react';

const value = {
    results: [],
    setResults: () => {},
    diary: [],
    setDiary: () => {},
    getFoods: () => {}//TODO: FOR TESTING ONLY
};



const AppContext = createContext(value);

export default AppContext;