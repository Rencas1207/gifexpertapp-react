export const getGifs = async (category) => {
  // Colocamos encodeURI por si la busqueda tiene espacios como (Rick and Morty)
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=GTFnjH2UIg90s4E9YH6SWF3dg7GNF0kz`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
  //setImages
  //   console.log(gifs);
  //   setImages(gifs);
};
