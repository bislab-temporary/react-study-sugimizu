import { Input, VStack } from "@chakra-ui/react"

const InputBar = ()=> {
  return (
    <VStack pt="20px">
      <Input w="500px" h="50px" variant="outline" placeholder="input TODO" />
    </VStack>
  )
}

export default InputBar
