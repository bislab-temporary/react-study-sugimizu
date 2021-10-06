import React, { Dispatch, SetStateAction } from "react";
import { VStack, Checkbox } from "@chakra-ui/react";

type Props = {
  todoItems: string[];
  todoStatus: boolean[];
  setTodoStatus: Dispatch<SetStateAction<boolean[]>>;
};

const TodoItems = (props: Props): JSX.Element => {
  const handleTodoStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTodoStatus = [...props.todoStatus];
    const elemetnNumber = +event.target.value;
    console.log(elemetnNumber);
    newTodoStatus[elemetnNumber] = !newTodoStatus[elemetnNumber];
    props.setTodoStatus(newTodoStatus);
  };

  console.log(props.todoStatus);

  return (
    <VStack>
      {props.todoItems.map((todoItem, index) =>
        props.todoStatus[index] === false ? (
          <Checkbox
            key={todoItem}
            value={index}
            w="500px"
            h="50px"
            p={5}
            shadow="md"
            borderWidth="1px"
            onChange={handleTodoStatus}
          >
            {todoItem}
          </Checkbox>
        ) : (
          <Checkbox
            key={todoItem}
            w="500px"
            h="50px"
            p={5}
            shadow="md"
            borderWidth="1px"
            as="del"
            bg="gray.300"
            onChange={handleTodoStatus}
          >
            {todoItem}
          </Checkbox>
        )
      )}
    </VStack>
  );
};

export default TodoItems;
