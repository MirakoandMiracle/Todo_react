import "./App.css";
import Background from "./components/Background";

import ToDoProvider from "./context/ToDoProvider";

function App() {
  return (
    <ToDoProvider>
      <Background />
    </ToDoProvider>
  );
}

export default App;
