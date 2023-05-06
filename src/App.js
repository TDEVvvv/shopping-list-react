import React, { useEffect, useState } from "react";
import Items from "./Items";
import Input from "./Input";
function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    { itemName: "Талх", quantity: 1, isSelected: false },
    { itemName: "Ундаа", quantity: 3, isSelected: true },
    { itemName: "Будаа", quantity: 2, isSelected: false },
  ]);
  const [total, setTotal] = useState(0);

  const handlePlusButton = () => {
    if (input.trim() === "") return;
    const newItem = {
      itemName: input,
      quantity: 1,
      isSelected: false,
    };

    setItems((prev) => prev.concat(newItem));
    setInput("");
  };
  const handleIncreaseButton = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  };
  const handleDecreaseButton = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      if (newItems[index].quantity > 1) newItems[index].quantity--;
      return newItems;
    });
  };
  const handleCheckbox = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };
  useEffect(() => {
    let sum = 0;
    items.map((item) => (sum += item.quantity));
    setTotal(sum);
  }, [items]);
  return (
    <div className="w-full h-screen bg-sky-300 flex justify-center items-center font-spartan">
      <div className="bg-orange-500 w-[500px] shadow-2xl">
        <Input
          handlePlusButton={handlePlusButton}
          input={input}
          setInput={setInput}
        />
        <Items
          items={items}
          handleIncreaseButton={handleIncreaseButton}
          handleDecreaseButton={handleDecreaseButton}
          handleCheckbox={handleCheckbox}
        />
        <p className="text-white text-2xl w-full my-4 text-center">
          Total: {total}
        </p>
      </div>
    </div>
  );
}

export default App;
