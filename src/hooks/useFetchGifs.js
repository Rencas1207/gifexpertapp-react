import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// CUSTOM HOOKS
// Los custom hooks funcionan como si fueran functional components, pueden tener
// efectos, reducer, context, etc

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // {data: [], loading: true}
};
