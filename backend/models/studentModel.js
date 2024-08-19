const mongoose = require('mongoose')


const studentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    std_index_num: {
        type: Number,
        required: [true, 'Please add a student index number field']
    },
    std_id_num: {
        type: String,
        required: [true, 'Please add a student ID number field']
    },
    std_name: {
        type: String,
        required: [true, 'Please add a student Name field']
    },
    std_gender: {
        type: String,
        required: [true, 'Please select a student gender']
    },
    std_dob: {
        type: Date,
        required: [true, 'Please add a student date of birth']
    },
    std_joining_date: {
        type: Date,
        required: [true, 'Please add a student joining date']
    },
    std_nationality: {
        type: String,
        required: [true, 'Please select a student Nationality ']
    },
    guardian_religion: {
        type: String,
        required: [true, 'Please select a parents/ guardian religion']
    },
    guardian_name: {
        type: String,
        required: [true, 'Please select a parents/ guardian name']
    },
    guardian_address: {
        type: String,
        required: [true, 'Please select a parents/ guardian address']
    },
    std_previous_school_name: {
        type: String,
       
    },
    std_joining_grade: {
        type: String,
        required: [true, 'Please add a student joining date']
    },
    first_grade: {
        type: String,
    },
    second_grade: {
        type: String,
    },
    third_grade: {
        type: String,
    },
    fourth_grade: {
        type: String,
    },
    fifth_grade: {
        type: String,
    },
    sixth_grade: {
        type: String,
    },
    seventh_grade: {
        type: String,
    },
    eighth_grade: {
        type: String,
    },
    ninth_grade: {
        type: String,
    },
    tenth_grade: {
        type: String,
    },
    eleventh_grade: {
        type: String,
    },
    twelfth_year: {
        type: String,
    },
    thirteen_year: {
        type: String,
    },
    twelfth_selected_scheme: {
        type: String,
    },
    thirteen_selected_scheme: {
        type: String,
    },
  
    special_grade: {
        type: String,
    },
    leaving_date: {
        type: Date,
    },
    last_date: {
        type: Date,
    },
    leaving_reason: {
        type: String,
    },
    std_action_form_num: {
        type: String,
    },
    std_sction_form_issue_date: {
        type: Date,
    },
    other_reason: {
        type: String,
    },
    user_name: {
        type: String,
    },
    update_user: {
        type: String,
    },

}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)