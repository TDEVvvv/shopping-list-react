import React from "react";

import Item from "./Item";
const Items = ({
  items,
  handleIncreaseButton,
  handleDecreaseButton,
  handleCheckbox,
}) => {
  return (
    <div className="w-full p-8 border-b-2">
      {items.map((item, index) => (
        <Item
          item={item}
          key={index}
          handleIncreaseButton={handleIncreaseButton}
          handleDecreaseButton={handleDecreaseButton}
          handleCheckbox={handleCheckbox}
          index={index}
        />
      ))}
    </div>
  );
};

export default Items;
