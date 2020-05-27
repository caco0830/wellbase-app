import React, {useContext, useEffect} from 'react';
import {searchFood} from '../../Services/foodDataAPI';
import useForm from '../../Hooks/useForm';
import ResultCard from '../ResultCard/ResultCard';
import AppContext from '../../AppContext';

function SearchForm() {
    const {results, setResults} = useContext(AppContext);
    const {handleChange, values} = useForm(search);

    //Context

    useEffect(() => {
        //Clear results with the component loads
        setResults([]);
    }, []);
    const cont = useContext(AppContext);
    //console.log(cont)

    async function search() {
        setResults(await searchFood(values.searchValue));
    }

    return ( 
        <div className="Search">
            {/* <form onSubmit={handleSubmit} className="Search__form"> */}

            <form onSubmit={cont.getFoods} className="Search__form">
                <label htmlFor="searchValue" className="Search__input-label">Search for an Item: </label>
                <input type="text" className="Search__input-value" name="searchValue" id="searchvalue" placeholder="food" onChange={handleChange} value={values.searchvalue}/>
                <button type="submit" className="button">Search</button>
            </form>
            <div className="Search__results">
                    {
                        results ? results.map((item,index) => {
                            return <ResultCard key={index} foodItem={item}></ResultCard>
                        })
                        : ''
                    }
            </div>
        </div>
    );



}

export default SearchForm;