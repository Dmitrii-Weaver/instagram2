import { useState } from 'react'

import useShowToast from "./useShowToast"

const usePreviewImage = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const showToast = useShowToast()
    const maxFileSizeInBytes = 2 * 1024 * 1024

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file && file.type.startsWith("image/")) {
            if (file.size > maxFileSizeInBytes) {
                showToast("Error", "Image size can be no larger than 2MB", "error")
                selectedFile(null)
                return
            }

            const reader = new FileReader()

            reader.onloadend = () => {
                setSelectedFile(reader.result)
            }
            reader.readAsDataURL(file)


        } else {
            showToast("Error", "Please upload an image", "error")
            selectedFile(null)
        }
    }

    return {selectedFile, handleImageChange, setSelectedFile}
}

export default usePreviewImage