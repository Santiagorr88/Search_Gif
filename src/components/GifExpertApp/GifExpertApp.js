import React, { useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);
  // const handleAdd = () => {
  //   setCategories([...categories, "Naruto"]);
  //   // setCategories((cats) => [...categories, "Pokemons"]);
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategories} />
      <hr />

      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
}
