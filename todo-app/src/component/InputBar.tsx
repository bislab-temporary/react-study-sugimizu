import { Input, VStack } from "@chakra-ui/react"

const InputBar = ()=> {
  const handleSubmit = () => {
    console.log("--submit--")
  }

  const handleInputText: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(event.target.value);
  };



  return (
    <VStack pt="20px">
      <Input 
        w="500px" 
        h="50px" 
        variant="outline" 
        placeholder="input TODO"
        onChange={handleInputText}
        onSubmit={handleSubmit}
      />
    </VStack>
  )
}

export default InputBar
