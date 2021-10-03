import React, { useState } from "react";
import { Input, VStack } from "@chakra-ui/react";
import TodoList from "./TodoList";

const InputBar = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>("");
  const [todoItems, setTodoItems] = useState<string[]>([]);

  const handleSubmit = (): void => {
    const newTodoItems = [...todoItems, inputText];
    setTodoItems(newTodoItems);
  };

  return (
    <VStack pt="10px">
      <Input
        w="500px"
        h="50px"
        variant="outline"
        placeholder="input TODO"
        onChange={(e) => {
          console.log(e.target.value);
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      {TodoList(todoItems)}
    </VStack>
  );
};

export default InputBar;
