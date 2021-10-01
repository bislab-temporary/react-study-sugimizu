import React from "react"
import { Input, Stack } from "@chakra-ui/react"

const InputBar = ()=> {
    return (
        <Stack spacing={10}>
            <Input placeholder="extra small size" size="xs" />
            <Input placeholder="small size" size="sm" />
            <Input placeholder="medium size" size="md" />
            <Input placeholder="large size" size="lg" />
        </Stack>
    )
}

export default InputBar