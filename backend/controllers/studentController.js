const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')
const User = require('../models/userModel')
// @desc Get students
// @route GET /api/students
// @access private
const getSts = asyncHandler(async (req, res) => {
    const { page = 1, limit = 50 } = req.query; // Default to page 1 and limit 10

    const students = await Student.find().sort({ createdAt: -1 }) .skip((page - 1) * limit)
    .limit(parseInt(limit));
     const total = await Student.countDocuments();

    res.status(200).json({students,total:total})
})
const searchStds = asyncHandler(async (req, res) => {
    const { searchTxt } = req.body; // Extract user_name from request body
    
    const { page = 1, limit =10 } = req.query; // Default to page 1 and limit 10

    // Find students where user_name matches the provided search text
    const students = await Student.find({ std_name: { $regex: searchTxt, $options: 'i' } }) 
   
    const searchResultsCount = students.length;
    res.status(200).json({students:students,total:searchResultsCount})
    
})

// @desc set student
// @route POST /api/students
// @access private
const setSt = asyncHandler(async (req, res) => {
 
    const { std_index_num,
        std_id_num,
        std_name,
        std_gender,
        std_dob,
        std_joining_date,
        std_nationality,
        guardian_religion,
        guardian_name,
        guardian_address,
        std_previous_school_name,
        std_joining_grade,
        first_grade,
        second_grade,
        third_grade,
        fourth_grade,
        fifth_grade,
        sixth_grade,
        seventh_grade,
        eighth_grade,
        ninth_grade,
        tenth_grade,
        eleventh_grade,
        twelfth_year,
        thirteen_year,
        twelfth_selected_scheme,
        thirteen_selected_scheme,
        special_grade,
        leaving_date,
        leaving_reason,
        last_date,
        std_action_form_num,
        std_sction_form_issue_date,
        other_reason, user_name } = req.body
    if (!std_index_num || !std_id_num || !std_name || !std_gender || !std_dob || !std_joining_date || !std_nationality || !guardian_religion || !guardian_name || !guardian_address || !std_joining_grade) {
        res.status(400)
        throw new Error('Please Enter The Required Field')
    }
    const student = await Student.create({
        user: req.user.id,
        std_index_num,
        std_id_num,
        std_name,
        std_gender,
        std_dob,
        std_joining_date,
        std_nationality,
        guardian_religion,
        guardian_name,
        guardian_address,
        std_previous_school_name,
        std_joining_grade,
        first_grade,
        second_grade,
        third_grade,
        fourth_grade,
        fifth_grade,
        sixth_grade,
        seventh_grade,
        eighth_grade,
        ninth_grade,
        tenth_grade,
        eleventh_grade,
        twelfth_year,
        thirteen_year,
        twelfth_selected_scheme,
        thirteen_selected_scheme,
        special_grade,
        leaving_date,
        leaving_reason,
        last_date,
        std_action_form_num,
        std_sction_form_issue_date,
        other_reason, user_name
    })
    res.status(200).json(student)
})


// @desc update student
// @route PUT /api/students/:id
// @access private
const updateSt = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    // if (!student) {
    //     res.status(400)
    //     throw new Error('student not found')
    // }

    const user = await User.findById(req.user.id)
    // check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found!')
    }
    // make sure the logged in user matchs the student user
    // if (student.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }
    const updatedStudentDetails = await Student.findByIdAndUpdate(req.params.id, req.body,
        { new: true })
    res.status(200).json(updatedStudentDetails)
})

// @desc Delete student
// @route DELETE /api/students/:id
// @access private
const deleteSt = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)

    // if (!student) {
    //     res.status(400)
    //     throw new Error('student not found')
    // }
    const user = await User.findById(req.user.id)
    // check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found!')
    }
    // make sure the logged in user matchs the student user
    // if (student.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }
    await student.deleteOne({ id: req.params.id });
    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getSts,
    setSt,
    deleteSt,
    updateSt, searchStds
}