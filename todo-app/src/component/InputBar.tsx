import { Input, VStack } from "@chakra-ui/react"

const InputBar = ()=> {
  return (
    <VStack>
      <Input variant="outline" placeholder="input lg" size="lg"/>
      <Input variant="outline" placeholder="input md" size="md"/>
      <Input placeholder="Basic usage" />
    </VStack>
    )
}

export default InputBar