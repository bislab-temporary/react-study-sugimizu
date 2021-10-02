import React, { useState } from "react"
import { Input, VStack, Box} from "@chakra-ui/react"
import TodoList from "./TodoList"

const InputBar = ()=> {
  const [inputText, setInputText] = useState<string>("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todoList, setTodoList] = useState<string[]>([])

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
      todoList.push(inputText)
      setInputText("")
  }

  return (
    <VStack pt="10px">
      <Input 
        w="500px" 
        h="50px" 
        variant="outline" 
        placeholder="input TODO"
        onChange={(e) => {
          console.log(e.target.value)
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            handleSubmit(e)
          }
        }}
      />
      {TodoList(todoList)}
    </VStack>
  )
}

export default InputBar
