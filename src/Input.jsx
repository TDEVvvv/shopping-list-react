import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Input = ({ input, setInput, handlePlusButton }) => {
  return (
    <div className="flex justify-between items-center p-2 m-4 bg-slate-100">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add an item..."
        className="w-full border-none p-2 bg-transparent outline-none"
      />
      <button onClick={handlePlusButton}>
        <AiOutlinePlus size={40} className="text-orange-500" />
      </button>
    </div>
  );
};

export default Input;
