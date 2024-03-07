import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

//desplays a list of suggested users

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                    See All
                </Text>
            </Flex>

            <SuggestedUser name="SuggestedUser42" followers={1632} avatar="/1123.png"/>
            <SuggestedUser name="RandomUser145" followers={213} avatar="/1124.png"/>
            <SuggestedUser name="_le_who" followers={1} avatar="/1125.png"/>

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                © 2023 Bult by {" "}
                <Link href="https://github.com/Dmitrii-Weaver" target='_blank' color={"blue.500"} fontSize={14}>
                    Dmitrii Tkachev
                </Link>
            </Box>
        </VStack>
    )
}

export default SuggestedUsers