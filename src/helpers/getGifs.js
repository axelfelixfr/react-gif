export const getGifs = async(category) => {
    // encodeURI sirve para reemplazar los espacios por caracteres que pueda entender la URL como '%'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1ritawJNpI0OSmRGg24h58BcC3u1BT5V`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}