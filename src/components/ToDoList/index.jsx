import React, { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const { todos, isCompletedFilter, completedToDos, changedDark } =
    useContext(ToDoContext);

  return (
    <div className="mt-5">
      <h2
        className={`${
          !changedDark ? "text-red-400" : "text-white"
        } text-[16px] md:text-2xl font-bold `}
      >
        ToDoList
      </h2>
      <div className="mt-5">
        {todos.map((todo) => {
          if (!isCompletedFilter) {
            if (!todo.completed) {
              return <ToDoItem todo={todo} key={todo.id} />;
            }
          } else {
            if (todo.completed) {
              return <ToDoItem todo={todo} key={todo.id} />;
            }
          }
        })}

        {!isCompletedFilter && completedToDos.length > 0 && (
          <div className="mt-5 ">
            <h2
              className={`${
                !changedDark ? "text-red-400" : "text-white"
              } text-[12px] md:text-[17px] font-medium`}
            >
              Completed Tasks
            </h2>
            {completedToDos.map((todo) => (
              <ToDoItem todo={todo} key={todo.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
