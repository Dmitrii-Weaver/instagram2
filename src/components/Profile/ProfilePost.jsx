import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Comment from '../Comments/Comment'
import PostFooter from "../Feedposts/Postfooter"
import useUserProfileStore from '../../store/userProfileStore'

//profile post template

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const userProfile = useUserProfileStore((state) => state.userProfile)
  return (
    <>

      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={'whiteAlpha.300'}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}>
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}>
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>{post.likes.length}</Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>{post.comments.length}</Text>
            </Flex>
          </Flex>
        </Flex>

        <Image src={post.imageURL} alt='profile post' w={"100%"} h={"100%"} objectFit={"cover"} />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose}
        isCentered={true} size={{ base: "3xl", md: "5xl" }} >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>

            <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"} maxH={"90vh"} minH={"50vh"}>
              <Box borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} flex={1.5}>
                <Image src={post.imageURL} alt='profile post' />
              </Box>
              <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src={userProfile.profilePicUrl} size={"sm"} name="user" />
                    <Text fontWeight={"bold"} fontSize={12}>{userProfile.username}</Text>
                  </Flex>
                  <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }} borderRadius={4} p={1}>
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>

                <Divider my={4} bg={"gray.500"} />

                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                  <Comment createdAt="5 minutes ago" username="AnotherUser2" pfp="/1125.png" text="lmfao what is this!!1!!??+?" />
                  <Comment createdAt="1 day ago" username="_username1" pfp="/profilepic.png" text="comment" />
                  <Comment createdAt="2 days ago" username="User1123" pfp="/1123.png" text="follow me, I'm cool" />
                </VStack>

                <Divider my={4} bg={"gray.500"} />

                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
      
    </>
  )
}

export default ProfilePost