import { commonAPI } from "./commonAPI"
import { server_url} from "./server_url"



// upload video api
export const uploadVideoAPI = async(video)=>{
    return await commonAPI('POST',`${server_url}/allVideos`,video)
}

//get all upload video api
export const getAllUploadVideoAPI = async()=>{
    return await commonAPI('GET',`${server_url}/allVideos`,"")
}

//delete video api
export const deleteVideoAPI = async(id)=>{
    return await commonAPI('DELETE',`${server_url}/allVideos/${id}`,{})
}

//====================================================================
// upload history video api // addHistoryAPI
export const addHistoryAPI = async(video)=>{
    return await commonAPI('POST',`${server_url}/history`,video)
}

//get all uploadHistoryVideo api
export const getHistoryAPI = async()=>{
    return await commonAPI('GET',`${server_url}/history`,"")
}

//delete video api
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI('DELETE',`${server_url}/history/${id}`,{})
}

//====================================================================
// addCategoryAPI
export const addCategoryAPI = async(category)=>{
    return await commonAPI('POST',`${server_url}/category`,category)
}

//getCategoryAPI 
export const getCategoryAPI = async()=>{
    return await commonAPI('GET',`${server_url}/category`,"")
}

//deleteCategoryAPI
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI('DELETE',`${server_url}/category/${id}`,{})
}

//==============================================
//getAVideoAPI // for getting a singlevideo
export const getAVideoAPI=async(id)=>{
  return await commonAPI('GET',`${server_url}/allVideos/${id}`,"")
}

// updateCategoryAPI
export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI('PUT',`${server_url}/category/${id}`,categoryDetails)
}