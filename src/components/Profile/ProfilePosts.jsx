import { Box, Grid, Skeleton, VStack, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ProfilePost from './ProfilePost'
import useGetUserPosts from '../../hooks/useGetUserPosts'

//posts created by the user and displayed in their profile

const ProfilePosts = () => {
  const { isloading, posts } = useGetUserPosts()
  const noPostsFound = !isloading && posts.length == 0
  if (noPostsFound) return <NoPostsFound />


  return (
    <Grid templateColumns={{
      sm: "repeat(1, 1fr)",
      md: "repeat(3, 1fr)"
    }} gap={1} columnGap={1}>
      {isloading && [0, 1, 2].map((idx) => (
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
            <Box h="300px">contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isloading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
    </Grid>
  )
}

export default ProfilePosts

const NoPostsFound = () => {
  return (
    <Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}>No Posts Found🤔</Text>
    </Flex>
  );
};