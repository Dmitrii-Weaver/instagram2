import {  Box, Button, Flex, Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import React from 'react'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants'
import { BiLogOut } from "react-icons/bi"
import useLogout from '../../hooks/useLogout'
import SidebarItems from './SidebarItems'

//main sidebar with navigation

/* logos import */
const Sidebar = () => {
  

  const {handleLogout, isLoggingOut} = useLogout()

  return (
    <Box h={"100vh"} borderRight={"1px solid"} borderColor={"WhiteAlpha.300"} py={8} position={"sticky"} top={0} left={0} px={{ base: 2, md: 4 }}>

      {/* Sidebar top*/}

      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
          <InstagramLogo />
        </Link>
        <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }} cursor={"pointer"} borderRadius={6} _hover={{ bg: "whiteAlpha.200" }} w={10}>
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

        {/* Sidebar bottom*/}

        <Tooltip hasArrow label={"Logout"} placement='right' ml={1} openDelay={500} display={{ base: 'block' }}>
          <Flex onClick={handleLogout} marginTop={"auto"} alignItems={"center"} gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }} justifyContent={{ base: "center", md: "flex-start" }}>
            <BiLogOut size={25} />
            <Button display={{ base: "none", md: "block" }} variant={"ghost"} _hover={{bg:"transparent"}} isLoading={isLoggingOut}> Logout </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar