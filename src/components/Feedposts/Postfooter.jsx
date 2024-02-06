import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NotificationsLogo, SearchLogo, UnlikeLogo } from '../../assets/constants'

const Postfooter = () => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(120)

  const handleLike = () => {
    if(liked){
      setLiked(false)
      setLikes(likes-1)
    }
    else{
      setLiked(true)
      setLikes(likes+1)
    }
  }

  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike}>
          {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
      </Flex>
    </>
  )
}

export default Postfooter