import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    // Con el objeto jest podemos simular una función con el método fn()
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    // Antes de cada prueba va a realizar esta funci´ón
    beforeEach(() => {
        // Limpiamos las acciones realizadas antes de cada prueba con clearAllMocks
        jest.clearAllMocks();
        // Inicializamos nuevamente el wrapper por cada prueba
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente el componente', () => {
        // Comparamos que el componente haga match con el snapshot 
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        // Seleccionamos el input con el método find()
        const input = wrapper.find('input');
        const value = 'Hola mundo!!';

        // Simulamos el evento change cambiando el value del input
        input.simulate('change', {target: { value }});

        // Esperamos que el parrafo tenga el mismo contenido (value) que el input
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe de mandar la información con submit', () => {
        // Simulamos el evento submit (enviar el formulario) pero con el input vacio
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // La función setCategories nunca debio ser llamada así que la negamos con 'not'
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo!!';

        // Le mandamos al input el value de 'Hola mundo!!!'
        wrapper.find('input').simulate('change', {target: {value}});

        // Simulamos enviar el formulario con el evento submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // Esperamos que la función setCategories haya sido llamada
        expect(setCategories).toHaveBeenCalled();

        // Esperamos que haya sido llamada una vez
        expect(setCategories).toHaveBeenCalledTimes(1);

        // Esperamos que se llamada una función y no cualquier otra cosa
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // Esperamos que el value del input este vacío nuevamente
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});