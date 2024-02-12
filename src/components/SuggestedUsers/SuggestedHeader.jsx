import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import React from 'react'

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name='username1' size={"lg"} src='/profilepic.png' />
                <Text fontSize={12} fontWeight={"bold"}>username1</Text>
            </Flex>
            <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.400"} style={{ textDecoration: "none" }} cursor={"pointer"}>Logout</Link>
        </Flex>
    )
}

export default SuggestedHeader