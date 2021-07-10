import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    // Los useEffect no pueden ser asincronos, ya que son sincronos
    useEffect(() => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category]);

    return state; // { data:[], loading: true }
}