import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['Fun', 'Sad', 'Smile'];
    const [categories, setCategories] = useState(['Fun']);
    
    /*
    const handleAdd = () => {
        // setCategories([...categories, 'Other']);
        setCategories(cats => [...cats, 'Other']);
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;