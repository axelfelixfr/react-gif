import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from './../GifExpertApp';
import '@testing-library/jest-dom'

describe('Pruebas en el componente principal <GifExpertApp />', () => {
    
    test('Se debe cargar correctamente el componente', () => {
        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de mostrar una lista de categorías', () => {
        const categories = ['FUN', 'Smile'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
    
})
