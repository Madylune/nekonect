import React from "react";

function Item(props) {
  return (
    <img
      src={props.src}
      id={props.id}
      alt={props.alt}
      className={props.className}
      onClick={props.onClick}
    />
  );
}

export default Item;
