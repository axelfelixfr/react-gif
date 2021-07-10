import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { expect } from '@jest/globals';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
    
    const category = 'FUN';

    test('Debe de cargar correctamente el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/ejemplo/prueba.jpg',
            title: 'Ejemplo de prueba'
        },
        {
            id: 'Nuevo',
            url: 'https://localhost/ejemplo/nuevo.jpg',
            title: 'Ejemplo nuevo'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})