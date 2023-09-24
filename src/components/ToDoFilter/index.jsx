import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoFilter = () => {
  const { changedDark, setIsCompletedFilter } = useContext(ToDoContext);
  return (
    <div className=" rounded flex items-center">
      <input
        type="checkbox"
        name="chkfilter"
        id="chkfilter"
        className="w-4 md:5"
        onChange={(e) => {
          setIsCompletedFilter(e.target.checked);
        }}
      />
      <label
        className={`${
          !changedDark ? "text-red-400" : "text-white"
        } ml-2 cursor-pointer font-medium text-[15px] md:text-[18px]" htmlFor='chkfilter'`}
      >
        {" "}
        Completed
      </label>
    </div>
  );
};

export default ToDoFilter;
