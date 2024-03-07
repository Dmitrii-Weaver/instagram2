import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

//post header : author, ofo, date

const Postheader = ({username, avatar}) => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} alt="user pfp" size={"sm"} />
                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                    {username}
                    <Box color={"gray.500"}>
                        - 1w
                    </Box>
                </Flex>
            </Flex>
            <Box cursor={"pointer"}>
                <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{ color: "white" }} transition={"0.2s ease-in-out"}> Unfollow </Text>
            </Box>
        </Flex>
    )
}

export default Postheader