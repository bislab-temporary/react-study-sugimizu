import { Input, VStack } from "@chakra-ui/react"

const InputBar = ()=> {

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if( e.key === "Enter"){
      console.log("--submit--")
    }
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
        onKeyDown={(e) => handleSubmit(e)}
      />
    </VStack>
  )
}

export default InputBar
