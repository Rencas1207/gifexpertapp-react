import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  //   console.log(state);
  //   const [images, setImages] = useState([]);

  // El useEffect hace que se ejecuta una unica vez, sirve como una condicional
  // Las gifs e images al final van hacer las mismas
  //   useEffect(() => {
  //  getGifs(category).then((gifs) => setImages(gifs));
  //     getGifs(category).then(setImages);
  //   }, [category]);
  // Luego le pasamos al array el category para quitar el warning

  return (
    <>
      <h3 className="categoria animate__animated animate__bounceInDown">
        {category}
      </h3>

      {loading && <p className="loading">Loading</p>}

      <div className="card-grid">
        {/* {images.map((img) => (
        <GifGridItem key={img.id} img={img} />
      ))} */}
        {/* En este caso estamos usando la desestructuración ya que es un arreglo de objeto lo que estamos mandando */}
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
