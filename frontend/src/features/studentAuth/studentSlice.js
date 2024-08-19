import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import studentService from './studentServices'


const initialState = {
    studentDetails: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    limit: 1,
    searchQuery: "",
    totalRecord:0
}


// Add New Student Record
export const addNewRecord = createAsyncThunk('student/create', async (stdDetails, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await studentService.addNewRecord(stdDetails, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// Get All Student Record
export const getStudents = createAsyncThunk('student/getAll', async (limit, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await studentService.getStudents(limit, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// Get All Student Record
export const deleteStudent = createAsyncThunk('student/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await studentService.deleteStd(id, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// update student details
export const updateStudent = createAsyncThunk('student/update', async (data, thunkAPI) => {
    const { id, updateData } = data


    try {
        const token = thunkAPI.getState().auth.user.token
        return await studentService.updateStd(id, updateData, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const searchStds = createAsyncThunk('student/search', async (searchData, thunkAPI) => {


    try {
        const token = thunkAPI.getState().auth.user.token
        return await studentService.searchStds(searchData, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        reset: (state) => initialState,
        handleLimit: (state, action) => {
        
            state.limit = action.payload
        },
        handleSearch: (state, action) => {

            state.searchQuery = action.payload
        },
        resetStates: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewRecord.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addNewRecord.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.studentDetails?.students.unshift(action.payload)
                state.totalRecord = state.totalRecord+1
            })
            .addCase(addNewRecord.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })
            .addCase(getStudents.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getStudents.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.studentDetails = action.payload
                state.totalRecord = action.payload.total
            })
            .addCase(getStudents.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })
            .addCase(deleteStudent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.totalRecord = state.totalRecord-1
                state.studentDetails.students = state.studentDetails?.students.filter((student) => student._id !== action.payload.id)
            })
            .addCase(deleteStudent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })
            .addCase(updateStudent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true

                const updatedProduct = action.payload;
                const existingProductIndex = state.studentDetails?.students.findIndex(product => product._id === updatedProduct._id);
             
                if (existingProductIndex !== -1) {
                    state.studentDetails.students[existingProductIndex] = {
                        ...state.studentDetails?.students[existingProductIndex],
                        ...updatedProduct,
                    };
                }
            })
            .addCase(updateStudent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })
            .addCase(searchStds.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchStds.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.studentDetails = action.payload
                state.totalRecord = action.payload.total
            })
            .addCase(searchStds.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })
    },
})

export default studentSlice.reducer
export const { reset, resetStates, handleLimit, handleSearch } = studentSlice.actions
