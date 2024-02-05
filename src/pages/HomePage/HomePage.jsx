import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Feedposts from '../../components/Feedposts/Feedposts'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}  border={"1px solid green"}>
          <Feedposts />
        </Box>
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"} border={"1px solid red"}>
          Suggested Users
        </Box>
      </Flex>

    </Container>
  )
}

export default HomePage