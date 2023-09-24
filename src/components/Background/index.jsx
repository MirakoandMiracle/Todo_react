import { useContext } from "react";
import Changetheme from "../Changetheme";
import ToDoFilter from "../ToDoFilter";
import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";
import { ToDoContext } from "../../context/ToDoProvider";

const Background = () => {
  const { changedDark } = useContext(ToDoContext);
  return (
    <div
      className={`h-screen ${
        !changedDark
          ? "bg-[url('https://images.unsplash.com/photo-1555231964-2efe395ef6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGluayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')]"
          : "bg-[url('https://images.unsplash.com/photo-1503796964332-e25e282e390f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80')]"
      } w-full md:w-[60%] mx-auto bg-cover rounded `}
    >
      <div
        className={`${
          !changedDark ? "bg-red-100" : "bg-gray-900"
        } bg-opacity-70 px-3 md:px-5 py-4 h-screen `}
      >
        <ToDoForm />
        <div className="flex justify-end mt-5 ">
          <ToDoFilter />
          <Changetheme />
        </div>
        <ToDoList />
      </div>
    </div>
  );
};

export default Background;
