import { getGifs } from './../../helpers/getGifs';

describe('Pruebas en la función getGifs fetch', () => {

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('FUN');
        expect(gifs.length).toBe(10);
    });

    test('Debe de mandar un arreglo vacío', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
    
})