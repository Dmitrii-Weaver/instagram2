import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Feedpost from './Feedpost'

//Display posts in the feed

const Feedposts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2, 3].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10} />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height={"10px"} w={"200px"}></Skeleton>
              <Skeleton height={"10px"} w={"200px"}></Skeleton>
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>123</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && (
        <>
          <Feedpost username="username1" avatar="/img1.png" img="/img1.png" />
          <Feedpost username="testuser2" avatar="/img2.png" img="/img2.png" />
          <Feedpost username="1234uname" avatar="/img3.png" img="/img3.png" />
          <Feedpost username="keklmao2" avatar="/img4.png" img="/img4.png" />
        </>
      )}
    </Container>
  )
}

export default Feedposts