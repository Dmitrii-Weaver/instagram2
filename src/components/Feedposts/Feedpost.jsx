import React from 'react'
import Postheader from './Postheader'
import { Box, Image } from '@chakra-ui/react'
import Postfooter from './Postfooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

//Feedpost template

const Feedpost = ({post}) => {
    console.log(post.createdBy)
    console.log(useGetUserProfileById(post.createdBy))
    const {userProfile} = useGetUserProfileById(post.createdBy)
    return (
        <>
        <Postheader post={post} creatorProfile={userProfile} />
        <Box my={2} borderRadius={4} overflow={"hidden"}>
            <Image src={post.imageURL} alt="Feed Post"/>
        </Box>
        <Postfooter post={post} creatorProfile={userProfile} />
        </>
    )
}

export default Feedpost