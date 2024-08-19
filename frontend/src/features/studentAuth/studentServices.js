import axios from 'axios'

const API_URL = '/api/students/'

// Create New Student Details
const addNewRecord = async (stdDetailsData, token) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, stdDetailsData, config)
    return response.data
}
// Get All Stundets Details
const getStudents = async (limit,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, {
        params: { page: limit, limit: 50 },
      }, config)
    return response.data
}
// Get All Stundets Details
const deleteStd = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(`${API_URL}${id}`, config)
    return response.data
}
// update
const updateStd = async (id, updateData, token) => {
   
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(`${API_URL}${id}`,  updateData,config)
 
    return response.data
}
const searchStds = async (searchData, token) => {

  
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${API_URL}search`,searchData,config)
    
    return response.data
}

const studentService = {
    addNewRecord,
    getStudents,
    deleteStd,
    updateStd,searchStds
}

export default studentService