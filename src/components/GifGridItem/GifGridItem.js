import React from "react";

export default function GifGridItem(props) {
  const { id, title, size } = props;

  console.log(id, title, size);
  return (
    <div className="card animate__animated animate__backInDown">
      <img src={size} alt={title} />
      <p>{title}</p>
    </div>
  );
}
