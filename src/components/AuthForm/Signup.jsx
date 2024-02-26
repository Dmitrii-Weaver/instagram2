import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        fullname: "",
        username: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <Input placeholder='Email' type='email' fontSize={14}
                value={inputs.email} size={"sm"}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
            <Input placeholder='Username' type='text' fontSize={14}
                value={inputs.username} size={"sm"}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
            <Input placeholder='Full name' type='text' fontSize={14}
                value={inputs.fullname} size={"sm"}
                onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />
            <InputGroup>
                <Input placeholder='Password' type={showPassword ? "text" : "password"} fontSize={14}
                    value={inputs.password} size={"sm"}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />

                <InputRightElement h={"full"}>
                    <Button variant={"ghost"} size={"sm"} onClick={()=> setShowPassword(!showPassword)}> 
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} >Sign up</Button></>
    )
}

export default Signup