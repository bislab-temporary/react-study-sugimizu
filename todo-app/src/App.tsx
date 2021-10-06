import React, { useState } from "react";
import InputBar from "./components/InputBar";
import TodoItems from "./components/TodoItems";

const App = (): JSX.Element => {
  const [todoItems, setTodoItems] = useState<string[]>([]);

  return (
    <>
      <InputBar todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoItems todoItems={todoItems} />
    </>
  );
};
export default App;
