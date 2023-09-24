import { useContext, useRef, useState } from "react";
import {
  RiEdit2Fill,
  RiDeleteBin2Fill,
  RiCheckFill,
  RiCloseFill,
} from "react-icons/ri";
import { ToDoContext } from "../../context/ToDoProvider";
import complete from "../../assets/completed.mp3";
const ToDoItem = ({ todo }) => {
  const { deleteToDo, editToDo, changedDark } = useContext(ToDoContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const refEditInput = useRef(null);
  const refAudio = useRef(new Audio(complete));

  const DeleteHandler = () => {
    deleteToDo(todo.id);
  };

  const EditHandler = () => {
    setIsEditMode(true);
    setIsReadOnly(false);
    refEditInput.current.focus();
  };

  const CancelHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
  };

  const SaveChangeHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
    //go to save chagne database
    todo.text = refEditInput.current.value;
    editToDo(todo);
  };

  const CompleteCheckHandler = (e) => {
    if (e.target.checked) {
      refAudio.current.volume = 0.8;

      refAudio.current.play();
    }
    todo.completed = e.target.checked;
    editToDo(todo);
  };

  return (
    <div
      className={`flex mt-4 justify-between items-center ${
        !changedDark ? " bg-red-200" : "bg-gray-100"
      } py-3 px-2 md:py-4 md:px-5 rounded`}
    >
      <div className="flex gap-6 items-center w-[80%]">
        <input
          type="checkbox"
          name="chk-completed"
          id="chk-completed"
          className="w-3 md:w-4"
          onClick={(e) => CompleteCheckHandler(e)}
          defaultChecked={todo.completed ? true : false}
        />
        <input
          type="text"
          ref={refEditInput} //const r=docu.getbyid("")
          defaultValue={todo.text}
          readOnly={isReadOnly}
          className={`outline-none bg-transparent  text-[15px] md:text-[18px]
         ${!changedDark ? " text-red-400" : "text-black"} font-medium w-full ${
            !isEditMode && todo.completed ? "line-through text-gray-500" : ""
          }`}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              SaveChangeHandler();
            }
          }}
        />
      </div>
      {isEditMode ? (
        <div className="flex items-center">
          <button className="mr-5 md:mr-6" onClick={SaveChangeHandler}>
            <RiCheckFill
              className={`${
                !changedDark ? "text-red-400" : "text-black"
              } text-[20px] md:text-[25px] hover:text-red-700`}
            />
          </button>
          <button onClick={CancelHandler}>
            <RiCloseFill
              className={`${
                !changedDark ? "text-red-500" : "text-black"
              } text-[20px] md:text-[25px] hover:text-red-700`}
            />
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <button className="mr-5 md:mr-6" onClick={EditHandler}>
            <RiEdit2Fill
              className={`${
                !changedDark ? "text-red-400" : "text-black"
              } text-[20px] md:text-[25px] hover:text-red-700`}
            />
          </button>
          <button onClick={DeleteHandler}>
            <RiDeleteBin2Fill
              className={`${
                !changedDark ? "text-red-500" : "text-black"
              } text-[20px] md:text-[25px] hover:text-red-700`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
