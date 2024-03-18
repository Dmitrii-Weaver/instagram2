import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore'
import useUserProfileStore from '../store/userProfileStore'
import useShowToast from "./useShowToast"

const useFollowUser = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false)
    const [isFollowing, setIsFollowing] = useState(false)
    const { user, setUser } = useAuthStore()
    const { userProfile, setUserProfile } = useUserProfileStore()
    const showToast = useShowToast()


    const handleFollowUser = async () => {
        setIsUpdating(true)
        try {

        } catch (error) {
            showToast("Error", error.message, "error")
        } finally {
            setIsUpdating(false)
        }

    }

    useEffect(() => {
        if (user) {
            const isFollowing = user.following.includes(userId)
            setIsFollowing(isFollowing)
        }
    }, [user, userId])

    return { isUpdating, isFollowing, handleFollowUser }
}

export default useFollowUser