import React from 'react'
import Postheader from './Postheader'
import { Box, Image } from '@chakra-ui/react'
import Postfooter from './Postfooter'

const Feedpost = () => {
    return (
        <>
        <Postheader />
        <Box my={2}>
            <Image src='/img1.png' alt="alt"/>
        </Box>
        <Postfooter />
        </>
    )
}

export default Feedpost