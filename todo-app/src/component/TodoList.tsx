import { Box, VStack } from "@chakra-ui/react"

const TodoList = (todoList: string[]) => {
  return (
    <VStack>
      {todoList.map((eachData) => {
        return (
          <Box 
            w="500px" 
            h="50px" 
            p={5}
            shadow="md" 
            borderWidth="1px"
          >
            {eachData}
          </Box>  
        )
      })}
    </VStack>
  )
}

export default TodoList
