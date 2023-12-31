import React, { useContext, useRef } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

import { BsFillPlusSquareFill } from "react-icons/bs";

const ToDoForm = () => {
  const { addToDo, changedDark } = useContext(ToDoContext);
  const refTask = useRef(null);
  const chkVale = (refEl) => {
    console.log(refEl);
    if (refEl.current.value == "") {
      refEl.current.focus();
      refEl.current.classList.add("border-red-500", "border-2");
      console.log(refEl.current.classList);
      return false;
    }
    return true;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (chkVale(refTask)) {
      const newToDo = {
        text: refTask.current.value,
        completed: false,
      };

      addToDo(newToDo);
      refTask.current.value = "";
      refTask.current.focus();
    }
  };
  return (
    <form onSubmit={(e) => formSubmitHandler(e)}>
      <div className="flex md:gap-6 gap-3 items-center">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter your tasks"
          ref={refTask} //const t=document.getElementByID("todo")
          className="w-full md:w-[90%] outline-none p-2 md:py-2 md:px-3 rounded shadow-lg text-[15px] md:text-[18px]"
          onChange={() => {
            if (refTask.current.value) {
              refTask.current.classList.remove("border-red-500", "border-2");
            }
          }}
        />
        <button>
          <BsFillPlusSquareFill
            className={`${
              !changedDark ? "text-red-400" : "text-white"
            } text-[35px] md:text-[42px] hover:text-pink-700`}
          />
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
