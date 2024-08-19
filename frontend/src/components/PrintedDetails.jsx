import moment from 'moment';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import flag from '../images/flag.png';
import {Button} from 'react-bootstrap';

const PrintableStudentDetails = () => {
    const { state } = useLocation();

    const [formData, setFormData] = useState({
        std_index_num: state.std_index_num,
        std_id_num: state.std_id_num,
        std_name: state.std_name,
        std_gender: state.std_gender,
        std_dob: state.std_dob === null ? '' : moment(state.std_dob).format('YYYY-MM-DD'),
        std_joining_date: state.std_joining_date === null ? '' : moment(state.std_joining_date).format('YYYY-MM-DD'),
        std_nationality: state.std_nationality,
        guardian_religion: state.guardian_religion,
        guardian_name: state.guardian_name,
        guardian_address: state.guardian_address,
        std_previous_school_name: state.std_previous_school_name,
        std_joining_grade: state.std_joining_grade,
        first_grade: state.first_grade,
        second_grade: state.second_grade,
        third_grade: state.third_grade,
        fourth_grade: state.fourth_grade,
        fifth_grade: state.fifth_grade,
        sixth_grade: state.sixth_grade,
        seventh_grade: state.seventh_grade,
        eighth_grade: state.eighth_grade,
        ninth_grade: state.ninth_grade,
        tenth_grade: state.tenth_grade,
        eleventh_grade: state.eleventh_grade,
        twelfth_year: state.twelfth_year,
        thirteen_year: state.thirteen_year,
        twelfth_selected_scheme: state.twelfth_selected_scheme,
        thirteen_selected_scheme: state.thirteen_selected_scheme,
        special_grade: state.special_grade,
        leaving_date: state.leaving_date === null ? '' : moment(state.leaving_date).format('YYYY-MM-DD'),
        leaving_reason: state.leaving_reason,
        last_date: state.last_date === null ? '' : moment(state.last_date).format('YYYY-MM-DD'),
        std_action_form_num: state.std_action_form_num,
        std_sction_form_issue_date: state.std_sction_form_issue_date === null ? '' : moment(state.std_sction_form_issue_date).format('YYYY-MM-DD'),
        other_reason: state.other_reason,
    });

    const {
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
        other_reason,
    } = formData;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgb(215 221 228)', padding: '0 25px' }}>
                <img src={logo} width={100} height={100} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', fontFamily: 'initial'
                }}>
                    <h4>R/Al-Mackiya Muslim Maha Vidyalaya</h4>
                    <p style={{ textAlign: 'center' }}>09 Mosque Road, Rathnapura</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p>Email: ralmackiya@gmail.com</p>
                        <p>Tel: 0452230993</p>
                    </div>
                </div>
                <img src={flag} width={100} height={100} />
            </div>
            <div style={{ padding: '0px 20px 0 40px', flexGrow: 1 }}>
            <Form>
                    <div>
                        <Row className="mb-3">
                            <Form.Group className='print_column mt-3' as={Col} md="2" sm="6">
                                <Form.Label>Index Number</Form.Label>
                                <h6 className="underline-text">{std_index_num}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="3" sm="6">
                                <Form.Label>Student ID Number</Form.Label>
                                <h6 className="underline-text">{std_id_num}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="7">
                                <Form.Label>Student's name (write the first letters first, then last name write second)</Form.Label>
                                <h6 className="underline-text">{std_name}</h6>
                            </Form.Group>
                        </Row>
                    </div>
                    <div>
                        <Row className="mb-3">
                            <Form.Group className='print_column' as={Col} md="3" sm="3">
                                <Form.Label>Gender</Form.Label>
                                <h6 className="underline-text">{std_gender}</h6>
                            </Form.Group>
                            <Form.Group className='print_column' as={Col} md="3" sm="3">
                                <Form.Label>Date of Birth</Form.Label>
                                <h6 className="underline-text">{std_dob}</h6>
                            </Form.Group>
                            <Form.Group className='print_column' as={Col} md="3" sm="3">
                                <Form.Label>Joining Date</Form.Label>
                                <h6 className="underline-text">{std_joining_date}</h6>
                            </Form.Group>
                            <Form.Group className='print_column' as={Col} md="3" sm="3">
                                <Form.Label>Nationality</Form.Label>
                                <h6 className="underline-text">{std_nationality}</h6>
                            </Form.Group>

                        </Row>
                    </div>
                    <div>
                        <Row className="mb-3">
                            <Form.Group className='print_column mt-3' as={Col} md="2" sm="6">
                                <Form.Label>Parents Religion</Form.Label>
                                <h6 className="underline-text">{guardian_religion}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="3" sm="6">
                                <Form.Label>Parents/ Guardian Name</Form.Label>
                                <h6 className="underline-text">{guardian_name}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="3">
                                <Form.Label>Parents/ Guardian Address</Form.Label>
                                <h6 className="underline-text">{guardian_address}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="2" sm="6">
                                <Form.Label>Previous School Name</Form.Label>
                                <h6 className="underline-text">{std_previous_school_name}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="2" sm="6">
                                <Form.Label>Joining Grade</Form.Label>
                                <h6 className="underline-text">{std_joining_grade}</h6>
                            </Form.Group>
                        </Row>
                    </div>

                    <div>
                        <Row className="text-center mb=3">
                            <Form.Group className='print_column' as={Col} md="12">
                                <Form.Label style={{ fontSize: '18px', fontWeight: 600 }}>
                                    Year of completion for each grade in present school or previous school
                                </Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="complete_grade_year mb-3">
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>1st Grade</Form.Label>
                                <h6 className="underline-text">{first_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>2nd Grade</Form.Label>
                                <h6 className="underline-text">{second_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>3rd Grade</Form.Label>
                                <h6 className="underline-text">{third_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>4th Grade</Form.Label>
                                <h6 className="underline-text">{fourth_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>5th Grade</Form.Label>
                                <h6 className="underline-text">{fifth_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>6th Grade</Form.Label>
                                <h6 className="underline-text">{sixth_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>7th Grade</Form.Label>
                                <h6 className="underline-text">{seventh_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>8th Grade</Form.Label>
                                <h6 className="underline-text">{eighth_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>9th Grade</Form.Label>
                                <h6 className="underline-text">{ninth_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>10th Grade</Form.Label>
                                <h6 className="underline-text">{tenth_grade}</h6>
                            </Form.Group>
                            <Form.Group as={Col} md="1" sm="2">
                                <Form.Label>11th Grade</Form.Label>
                                <h6 className="underline-text">{eleventh_grade}</h6>
                            </Form.Group>
                        </Row>
                    </div>

                    <div>
                        <Row className="mb-3">
                            <Form.Group className='print_column' as={Col} sm="4">
                                <Form.Label>12th Grade</Form.Label>
                                <h6 className="underline-text">{twelfth_selected_scheme}{twelfth_year.length > 0 && ':'} {twelfth_year}</h6>
                            </Form.Group>
                            <Form.Group className='print_column' as={Col} sm="4">
                                <Form.Label>13th Grade</Form.Label>
                                <h6 className="underline-text">{thirteen_selected_scheme}{thirteen_year.length > 0 && ':'} {thirteen_year}</h6>
                            </Form.Group>
                            <Form.Group as={Col} sm="4" className='print_column'>
                                <Form.Label>Special Grade</Form.Label>
                                <h6 className="underline-text">{special_grade}</h6>
                            </Form.Group>
                        </Row>

                    </div>
                    <div>
                        <Row className="mb-3">
                            <Form.Group className='print_column mt-3' as={Col} md="4" sm="4">
                                <Form.Label>Date of leaving school</Form.Label>
                                <h6 className="underline-text">{leaving_date}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="8" sm="8">
                                <Form.Label>The date of the last return of the student who dropped out of school</Form.Label>
                                <h6 className="underline-text">{last_date}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} >
                                <Form.Label>Reason for leaving</Form.Label>
                                <h6 className="underline-text">{leaving_reason}</h6>
                            </Form.Group>
                        </Row>
                    </div>
                    <div>
                        <Row className="mb-3">
                            <Form.Group className='print_column mt-3' as={Col} md="3" sm="6">
                                <Form.Label>Student Action Form No</Form.Label>
                                <h6 className="underline-text">{std_action_form_num}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="3" sm="6">
                                <Form.Label>Date of issue of Student Action Form</Form.Label>
                                <h6 className="underline-text">{std_sction_form_issue_date}</h6>
                            </Form.Group>
                            <Form.Group className='print_column mt-3' as={Col} md="6">
                                <Form.Label>Other Reason</Form.Label>
                                <h6 className="underline-text">{other_reason}</h6>
                            </Form.Group>
                        </Row>
                    </div>

                </Form>
            </div>
            
            <div style={{ marginTop: 'auto', padding: '0px 20px 0 40px', textAlign: 'center',  paddingTop: '20px' }}>
                <Row className="mb-3">
                    <Form.Group className='print_column mt-3' as={Col} md="4" sm="4">
                   
                        <h6 className="underline-text"></h6>
                        <Form.Label>Principal </Form.Label>
                    </Form.Group>
                    <Form.Group className='print_column mt-3' as={Col} md="4" sm="4">
                    
                        <h6 className="underline-text"></h6>
                        <Form.Label>Vice Principal </Form.Label>
                    </Form.Group>
                    <Form.Group className='print_column mt-3' as={Col} md="4" sm="4">
                    
                        <h6 className="underline-text"></h6>
                        <Form.Label>Deputy Principal </Form.Label>
                    </Form.Group>
                </Row>
            </div>

            <Button variant="primary" className=' print_btn btn btn-primary btn-sm btn-block' st onClick={handlePrint}>Print</Button>
        </div>
    );
};

export default PrintableStudentDetails;
