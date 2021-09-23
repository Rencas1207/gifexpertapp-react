import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2 className="title">Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <ul> */}
      {categories.map((category) => (
        //  <li key={category}>{category}</li>
        <GifGrid key={category} category={category} />
      ))}
      {/* </ul> */}
    </>
  );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
