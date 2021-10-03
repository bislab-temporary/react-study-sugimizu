import React, { useState, Dispatch, SetStateAction } from "react";
import { Input, VStack } from "@chakra-ui/react";

type Props = {
  todoItems: string[];
  setTodoItems: Dispatch<SetStateAction<string[]>>;
};

const InputBar = (props: Props): JSX.Element => {
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (): void => {
    const newTodoItems = [...props.todoItems, inputText];
    props.setTodoItems(newTodoItems);
  };

  return (
    <VStack pt="10px">
      <Input
        w="500px"
        h="50px"
        variant="outline"
        placeholder="input TODO"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
    </VStack>
  );
};

export default InputBar;
