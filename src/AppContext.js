import React, {createContext, useReducer} from 'react';

const value = {
    results: [],
    setResults: () => {}
};



const AppContext = createContext(value);

export default AppContext;