import { Box, VStack } from "@chakra-ui/react";

type Props = {
  todoItems: string[];
};

const TodoItems = (props: Props): JSX.Element => (
  <VStack>
    {props.todoItems.map((todoItem) => (
      <Box
        key={todoItem}
        w="500px"
        h="50px"
        p={5}
        shadow="md"
        borderWidth="1px"
      >
        {todoItem}
      </Box>
    ))}
  </VStack>
);

export default TodoItems;
