import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // A la data la renombramos images
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            {/* Le pasamos el nombre de la categoría (de la búsqueda que se hizo) */}
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            
            {/* El loading debe estar en true para que aparezca el parrafo */}
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
            
            {/* Extraemos todos los gifs con map, y le pasamos al componente <GifGridItem /> la data de cada gif que se recoge */}
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))              
                }
            
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}