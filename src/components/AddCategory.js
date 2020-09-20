
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');  // le ponemos un string vacio

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        //se hace el llamado a setCategories
        if (inputValue.trim().length > 2){
            setCategories( cats=> [inputValue, ...cats]);
            setInputValue('');
        }
    }
    
    return ( 
        <form onSubmit={ handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />               
        </form>    
    )
}

AddCategory.propType={
    setCategories: PropTypes.func.isRequired
}