import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { MdRadioButtonUnchecked } from "react-icons/md";
const Item = ({
  item,
  handleIncreaseButton,
  index,
  handleDecreaseButton,
  handleCheckbox,
}) => {
  return (
    <div className="w-full flex justify-between items-center my-4">
      <div className="flex items-center text-white">
        {item.isSelected ? (
          <AiOutlineCheckCircle
            size={30}
            onClick={() => handleCheckbox(index)}
          />
        ) : (
          <MdRadioButtonUnchecked
            size={30}
            onClick={() => handleCheckbox(index)}
          />
        )}

        <p className={`text-2xl ml-2 ${item.isSelected && "line-through"} `}>
          {item.itemName}
        </p>
      </div>
      <div className="flex items-center bg-white p-2 rounded-2xl text-orange-500">
        <AiOutlineLeft size={25} onClick={() => handleDecreaseButton(index)} />
        <p className="text-2xl">{item.quantity}</p>
        <AiOutlineRight size={25} onClick={() => handleIncreaseButton(index)} />
      </div>
    </div>
  );
};

export default Item;
