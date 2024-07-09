import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Feedpost from './Feedpost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'

//Display posts in the feed

const Feedposts = () => {
  const {isLoading, posts} = useGetFeedPosts()


  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10} />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height={"10px"} w={"200px"}></Skeleton>
              <Skeleton height={"10px"} w={"200px"}></Skeleton>
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"400px"}>123</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && posts.length > 0 && posts.map((post) => <Feedpost key={post.id} post={post} /> ) }
      {!isLoading && posts.length == 0 && (
        <Text fontSize={"md"} color={"white"}>
          Not following any users. Check out the suggested users on the right
        </Text>
      )}
    </Container>
  )
}

export default Feedposts