import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const Changetheme = () => {
  const { setChangedDark, changedDark } = useContext(ToDoContext);
  const toggleTheme = () => {
    setChangedDark(!changedDark);
  };
  return (
    <>
      <div
        className={`${
          changedDark ? "bg-white text-black" : "bg-black text-white"
        }  rounded ml-3 text-[14px] md:text-[16px] p-2 md:py-2 md:px-3 cursor-pointer`}
        onClick={toggleTheme}
      >
        {changedDark ? "Default" : "Dark"}
      </div>
    </>
  );
};

export default Changetheme;
