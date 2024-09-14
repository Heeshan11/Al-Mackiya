import Table from 'react-bootstrap/Table';
import { displayTableTitle, tableTitle } from '../constant/Data';
import { FaTrashAlt, FaEdit, FaPrint } from "react-icons/fa";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, updateStudent } from '../features/studentAuth/studentSlice';
import { createSearchParams, Link, useNavigate, useNavigation } from 'react-router-dom';
import Empty from './Empty';
function DisplayTable({ students }) {
    const navigate = useNavigate()
    const { studentDetails } = useSelector((state) => state.student)
    const dispatch = useDispatch()
    const { index, std_id_num,
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
        yearOfCompleteGrade, leaving_date,
        last_date,
        leaving_reason,
        std_action_form_num,
        std_sction_form_issue_date,
        other_reason, } = displayTableTitle

    return (
        <div style={{ width: '95%' }}>

            <table border="1" width={"4500"}>
                <thead>
                    <tr>
                        <th rowSpan={3} width="50px">No</th>
                        <th rowSpan={3} width="120px">{index}</th>
                        <th rowSpan={3}>{std_id_num}</th>
                        <th rowSpan={3} width="400px">{std_name}</th>
                        <th rowSpan={3}>{std_gender}</th>
                        <th rowSpan={3} width="150px">{std_dob}</th>
                        <th rowSpan={3} width="150px">{std_joining_date}</th>
                        <th rowSpan={3}>{std_nationality}</th>
                        <th rowSpan={3} width="150px">{guardian_religion}</th>
                        <th rowSpan={3}>{guardian_name}</th>
                        <th rowSpan={3}>{guardian_address}</th>
                        <th rowSpan={3}>{std_previous_school_name}</th>
                        <th rowSpan={3}>{std_joining_grade}</th>
                        <th colSpan={18} className='straight'>{yearOfCompleteGrade.name}</th>
                        <th rowSpan={3}>{leaving_date}</th>
                        <th rowSpan={3}>{leaving_reason}</th>
                        <th rowSpan={3}>{last_date}</th>
                        <th rowSpan={3}>{std_action_form_num}</th>
                        <th rowSpan={3}>{std_sction_form_issue_date}</th>
                        <th rowSpan={3}>{other_reason}</th>
                        <th rowSpan={3}>Action</th>
                    </tr>
                    <tr>
                        {yearOfCompleteGrade.grades.map((e) => {
                            return (<th key={e} rowSpan={2}>{e}</th>)
                        })}
                        {yearOfCompleteGrade.advancedLevelScheme.map((e, index) => {
                            return (
                                <th key={index} style={{ height: '85px' }}>{e.label}</th>
                            )
                        })}
                        {yearOfCompleteGrade.advancedLevelScheme.map((e, index) => {
                            return (
                                <th key={index} style={{ height: '85px' }}>{e.label}</th>
                            )
                        })}
                        <th rowSpan={3}>{yearOfCompleteGrade.special_grade}</th>
                    </tr>
                    <tr>
                        <th className='straight' colSpan={3}>Grade 12th</th>
                        <th className='straight' colSpan={3}>Grade 13th</th>
                    </tr>
                </thead>
                <tbody>
                    {studentDetails?.students.length > 0 && studentDetails?.students?.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                <td>{e.std_index_num}</td>
                                <td>{e.std_id_num}</td>
                                <td>{e.std_name}</td>
                                <td>{e.std_gender}</td>
                                <td>{moment(e.std_dob).format('YYYY-MM-DD')}</td>

                                <td>{moment(e.std_joining_date).format('YYYY-MM-DD')}</td>
                                <td>{e.std_nationality}</td>
                                <td>{e.guardian_religion}</td>
                                <td>{e.guardian_name}</td>
                                <td>{e.guardian_address}</td>
                                <td>{e.std_previous_school_name}</td>
                                <td>{e.std_joining_grade}</td>
                                <td width={'60px'}>{e.first_grade}</td>
                                <td width={'60px'}>{e.second_grade}</td>
                                <td width={'60px'}>{e.third_grade}</td>
                                <td width={'60px'}>{e.fourth_grade}</td>
                                <td width={'60px'}>{e.fifth_grade}</td>
                                <td width={'60px'}>{e.sixth_grade}</td>
                                <td width={'60px'}>{e.seventh_grade}</td>
                                <td width={'60px'}>{e.eighth_grade}</td>
                                <td width={'60px'}>{e.ninth_grade}</td>
                                <td width={'60px'}>{e.tenth_grade}</td>
                                <td width={'60px'}>{e.eleventh_grade}</td>
                                {yearOfCompleteGrade.advancedLevelScheme.map((al, index) => {
                                    return (
                                        <td key={index} width={'60px'}>{al.value === e.twelfth_selected_scheme ? e.twelfth_year : ''}</td>
                                    )
                                })}
                                {yearOfCompleteGrade.advancedLevelScheme.map((al, index) => {
                                    return (
                                        <td key={index} width={'60px'}>{al.value === e.thirteen_selected_scheme ? e.thirteen_year : ''}</td>
                                    )
                                })}

                                <td width={'60px'}> {e.special_grade}</td>
                                <td width={'120px'}>{e.leaving_date === null ? '' : moment(e.leaving_date).format('YYYY-MM-DD')}</td>
                                <td width={'300px'}>{e.leaving_reason}</td>
                                <td width={'60px'}>{e.last_date === null ? '' : moment(e.last_date).format('YYYY-MM-DD')}</td>

                                <td>{e.std_action_form_num}</td>
                                <td width={'60px'}>{e.std_sction_form_issue_date === null ? '' : moment(e.std_sction_form_issue_date).format('YYYY-MM-DD')}</td>
                                <td width={'250px'}>{e.other_reason}</td>
                                <td width={'250px'}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        padding: '5px',
                                    }}>
                                        <Link to={`/update/${e._id}`}
                                            style={{ alignItems: 'center', display: 'flex' }}
                                            className='btn btn-sm btn-warning'
                                            state={e}>
                                            <FaEdit />&ensp; Edit
                                        </Link>
                                        <button className='btn btn-sm btn-danger' style={{ alignItems: 'center', display: 'flex' }} onClick={() => dispatch(deleteStudent(e._id))}><FaTrashAlt />&ensp;Delete</button>
                                        <Link to={`/print/`}
                                            style={{ alignItems: 'center', display: 'flex' }}
                                            className='btn btn-sm btn-secondary'
                                            state={e}>
                                            <FaPrint />
                                            &ensp; print
                                        </Link>
                                    </div>

                                </td>
                            </tr>
                        )
                    })}
                    {studentDetails?.students.length === 0 && <h5>Rocords not found</h5>}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayTable;