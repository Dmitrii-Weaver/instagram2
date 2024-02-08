import React from 'react'
import Postheader from './Postheader'
import { Box, Image } from '@chakra-ui/react'
import Postfooter from './Postfooter'

const Feedpost = ({username, avatar, img}) => {
    return (
        <>
        <Postheader username={username} avatar={avatar} />
        <Box my={2} borderRadius={4} overflow={"hidden"}>
            <Image src={img} alt="alt"/>
        </Box>
        <Postfooter username={username} />
        </>
    )
}

export default Feedpost