import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

//Comment base

const Comment = ({ createdAt, username, pfp, text }) => {
    return (
        <Flex gap={4} >
            <Avatar src={pfp} name={username} size={"sm"} />
            <Flex direction={"column"}>
                <Flex gap={2}>
                    <Text fontWeight={"bold"} fontSize={12}>{username}</Text>
                    <Text fontSize={14}>{text}</Text>
                </Flex>
                <Text fontSize={12} color={"gray"}>{createdAt}</Text>
            </Flex>
        </Flex>
    )
}

export default Comment