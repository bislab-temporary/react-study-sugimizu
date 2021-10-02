import React, { useState } from "react"
import { Input, VStack, Box} from "@chakra-ui/react"

const InputBar = ()=> {
  const [inputText, setInputText] = useState<string>("")
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todoList, setTodoList] = useState<string[]>([""])
 
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
      console.log("--submit--")
      console.log("inputData: ", inputText)
      todoList.push(inputText)
      console.log("todoList", todoList)
      setInputText("")
  }

  return (
    <VStack pt="20px">
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
      {todoList.map((eachData) => {
        return (
          <Box>{eachData}</Box>  
        )
      })}
    </VStack>
  )
}

export default InputBar
