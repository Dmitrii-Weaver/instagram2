import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, SearchLogo, UnlikeLogo } from '../../assets/constants'
import usePostComment from '../../hooks/usePostComment'
import useAuthStore from '../../store/authStore'

//post footer : likes, comments, etc.

const Postfooter = ({ post, username, isProfilePage }) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(120)
  const { isCommenting, handlePostComment } = usePostComment()
  const [comment, setComment] = useState("")
  const authUser = useAuthStore(state => state.user)
  const commentRef = useRef(null)



  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment("")
  }

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    }
    else {
      setLiked(true)
      setLikes(likes + 1)
    }
  }

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"small"}>
        {likes} likes
      </Text>

      {!isProfilePage && (
        <>

          <Text fontSize="sm" fontWeight={700}>
            {username} {" "}
            <Text as="span" fontWeight={400}>
              comment lmao
            </Text>
          </Text>
          <Text fontSize="sm" color={"gray"}>
            View all 384 comments
          </Text>
        </>
      )
      }

      {authUser && (
        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
          <InputGroup>
            <Input ref={commentRef} variant={"flushed"} placeholder='Add a comment...' color={"grey"} fontSize={14} onChange={(e) => setComment(e.target.value)} value={comment} />
            <InputRightElement>
              <Button fontSize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"} _hover={{ color: "white" }} bg={"transparent"} onClick={handleSubmitComment} isLoading={isCommenting}>Post</Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  )
}

export default Postfooter