import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';

// Realizamos un hook para la API
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    // Los useEffect no pueden ser asincronos, ya que son sincronos
    useEffect(() => {
        // Obtenemos los gifs a través de la categoría y cambiamos su estado con setState
        getGifs(category).then(imgs => {
            // Le pasamos la data de los gifs al igual que pasamos el loading de true a false, ya que termino la carga
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category]); // Si cambia la categoría, cambiara el useEffect

    return state; // { data:[], loading: true }
}