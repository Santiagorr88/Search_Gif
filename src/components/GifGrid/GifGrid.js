import React from "react";
import useFetchGif from "../hooks/useFetchGif";
import GifGridItem from "../GifGridItem/GifGridItem";

export default function GifGrid({ category }) {
  const { data: images, loading } = useFetchGif(category);

  return (
    <>
      <h3 className="animate__animated animate__backInDown">{category}</h3>
      <div className="card-grid ">
        {loading && (
          <p className="animate__animated animate__flash">Cargando</p>
        )}
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}
