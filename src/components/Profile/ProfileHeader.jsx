import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
    return (
        <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
            <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
                <Avatar src="/profilepic.png" name="uname1" alt="pfp" />
            </AvatarGroup>
            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex gap={4} direction={{ base: "column", sm: "row" }} justifyContent={{ base: "center", sm: "flex-start" }} alignItems={"center"} w={"full"}>
                    <Text fontSize={{ base: "sm", md: "lg" }}>_username1</Text>
                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                        <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }}>Edit Profile</Button>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text fontSize={{ base: "xs", md: "sm" }} as="span" fontWeight={"bold"} mr={1}>4</Text>
                        Posts
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text fontSize={{ base: "xs", md: "sm" }} as="span" fontWeight={"bold"} mr={1}>125</Text>
                        Followers
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text fontSize={{ base: "xs", md: "sm" }} as="span" fontWeight={"bold"} mr={1}>334</Text>
                        Following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={"bold"}>Sample  user 1</Text>
                </Flex>
                <Text fontSize={{ base: "xs", md: "sm" }}  >Sample bio, some text here, not too little, not too much</Text>
            </VStack>
        </Flex>
    )
}

export default ProfileHeader