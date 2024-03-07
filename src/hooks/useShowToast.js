import { useToast } from '@chakra-ui/react'

//toast display hook/template

const useShowToast = () => {
    const toast = useToast()
    const showToast = (title, desc, status) => {
        toast({
            title: title,
            description: desc,
            status: status,
            duration: 3000,
            isClosable: true
        })
    }
    return showToast
}

export default useShowToast