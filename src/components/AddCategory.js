import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    // Le damos un valor por defecto al input con el useState
    const [inputValue, setInputValue] = useState(''); // Mandamos como estado por defecto un string vacio

    // Realizamos una función para el input
    const handleInputChange = (e) => {
        // Hacemos uso del método setInputValue del useState para cambiar su value
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Quitamos el evento por default
        // Verificamos que por lo menos haya un string con longitud de tres para no mandar datos vacíos
        if(inputValue.trim().length > 2){
            // Accedemos a las categorías y le agregamos lo que esta en inputValue
            setCategories(cats => [inputValue, ...cats]);
            // Borramos el contenido del input
            setInputValue('');
        }
    };

    return (
        // Le pasamos el evento handleSubmit al formulario
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                // Le pasamos el value del useState
                value={ inputValue }
                // Le pasamos la función que se ejecutara cada que cambie el input
                onChange={ handleInputChange }
            />
        </form>
    )
}

// setCategories pasa a ser requerida
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}