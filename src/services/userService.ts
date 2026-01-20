import axiosInstance from "@/api/axiosInstance"

export const getPosts = () => {
    const response = axiosInstance.get("/posts")
    return response
}