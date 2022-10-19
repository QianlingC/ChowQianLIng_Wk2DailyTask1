import React from "react";
import PropTypes from "prop-types";

const ItemDisplay = (props) => {
  console.log(props);
  const { id, name, price } = props;

  return (
    <>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
    </>
  );
};
export default ItemDisplay;
