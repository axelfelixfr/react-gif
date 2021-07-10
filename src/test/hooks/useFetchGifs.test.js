import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async() => {
        // El result contiene toda la data que se obtuvo al montar el hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('FUN'));
        const { data, loading } = result.current; // Extraemos la data y el loading del result
       
        // El waitForNextUpdate nos sirve para el problema del didMount
        await waitForNextUpdate();

        // Esperamos que la data sea un arreglo vacío
        expect(data).toEqual([]);
        // Esperamos que el loading este en true
        expect(loading).toBe(true);
    });


    test('Debe de retornar un arreglo de 10 elementos y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('FUN'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        // Esperamos que sea un arreglo de 10 items
        expect(data.length).toBe(10);
        // Esperamos que el loading este en false
        expect(loading).toBe(false);
    });  
});