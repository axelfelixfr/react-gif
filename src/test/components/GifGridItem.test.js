import React from 'react';
import { shallow } from 'enzyme';
// import '@testing-library/jest-dom';
import { GifGridItem } from './../../components/GifGridItem';

describe('Pruebas en el componente <GifGridItem />', () => {

    // Definimos las props que le mandaremos al componente <GifGridItem />
    const propTypes = {
        title: 'Un título',
        url: 'https://localhost/algo.jpg'
    }

    // Definimos el wrapper con las props
    const wrapper = shallow(<GifGridItem {...propTypes}/>);

    test('Debe mostrar el componente correctamente', () => {
        // Verificamos que el wrapper haga match con el snapshot
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener el párrafo con el title', () => {
        // Con el método find obtenemos el parrafo
        const p = wrapper.find('p');
        // Verificamos que sea igual que el que tenemos en las props
        expect(p.text().trim()).toBe(propTypes.title);
    });

    test('Debe de tener la imagen al igual que el url y el atributo alt de las props', () => {
        // Con el método find obtenemos la imagen
        const img = wrapper.find('img');
        // Verificamos que tenga los atributos que definimos en las props
        expect(img.prop('src')).toBe(propTypes.url); // Con el método prop() podemos saber los atributos de los elementos HTML
        expect(img.prop('alt')).toBe(propTypes.title);
    });

    test('Debe de tener animate__fadeIn', () => {
        // Con el método find obtenemos el div principal del componente
        const div = wrapper.find('div');
        // Obtenemos sus clases con el método prop()
        const className = div.prop('className');
        // Con el método includes() podemos saber si incluye (con true o false) la clase 'animate__fadeIn'
        expect(className.includes('animate__fadeIn')).toBe(true);
    }); 
});