import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RadioBtn from './RadioBtn';
import DropDown from './DropDown';
import { advancedLevelSchemeOptions, Allgrades, gender, genderOptions } from '../constant/Data';
import { addNewRecord, reset, resetStates, updateStudent } from '../features/studentAuth/studentSlice';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import moment from 'moment';

function UpdateForm(props) {
  const [validated, setValidated] = useState(false);
  const { state } = useLocation();
  let { id } = useParams();
  const { user, } = useSelector(state => state.auth);


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
    update_user:user!==null?user.user_name:''


  })
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
    user_name,update_user

  } = formData

  // const [selectedGender, setSelectedGender] = useState('')

  const nationOption = ['C/M', 'C/T', 'C/C', 'C/S']
  const parentsReligionOption = ['Islam', 'Hinduism ', 'Catholic', 'Buddhism']
  const [selectedNationality, setSelectedNationality] = useState(state.std_nationality)
  const [selectedParentsReligion, setSelectedParentsReligion] = useState(state.guardian_religion)
  const [selectedGender, setSelectedGender] = useState(state.std_gender); // Default value or fetched value
  const [selectedTwelfthAl, setSelectedTwelfthAl] = useState(state.twelfth_selected_scheme)
  const [thirteenAl, setThirteenAl] = useState(state.thirteen_selected_scheme)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleOnChange = (e) => {

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      std_nationality: selectedNationality,
      std_gender: selectedGender,
      guardian_religion: selectedParentsReligion,
      twelfth_selected_scheme: selectedTwelfthAl,
      thirteen_selected_scheme: thirteenAl
    }))

  }, [selectedNationality, selectedGender, selectedParentsReligion, thirteenAl, selectedTwelfthAl])

  const handleSubmit = (e) => {
    e.preventDefault()
   
    
    dispatch(updateStudent({ id: id, updateData: formData }))
  }
  const { isSuccess,isError, message, isLoading } = useSelector((state) => state.student)
  useEffect(() => {

    if (isSuccess) {
      toast.warning("Update successfully!")
      navigate('/')
      setFormData({
        std_index_num: "",
        std_id_num: "",
        std_name: "",
        std_gender: "",
        std_dob: '',
        std_joining_date: '',
        std_nationality: '',
        guardian_religion: '',
        guardian_name: '',
        guardian_address: '',
        std_previous_school_name: '',
        std_joining_grade: '',
        first_grade: '',
        second_grade: '',
        third_grade: '',
        fourth_grade: '',
        fifth_grade: '',
        sixth_grade: '',
        seventh_grade: '',
        eighth_grade: '',
        ninth_grade: '',
        tenth_grade: '',
        eleventh_grade: '',
        twelfth_year: '',
        thirteen_year: '',
        twelfth_selected_scheme: '',
        thirteen_selected_scheme: "",
        special_grade: '',
        leaving_date: '',
        leaving_reason: '',
        last_date: '',
        std_action_form_num: '',
        std_sction_form_issue_date: '',
        other_reason: '',
      
      })
      dispatch(resetStates())
    }
    if (isError) {
      dispatch(resetStates())
      toast.error(message)
    }
    
  }, [isSuccess, message,isError])
  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };
  const handleTwelfthScheme = (value) => {
    setSelectedTwelfthAl(value);
  };
  const handleThirteenScheme = (value) => {
    setThirteenAl(value);
  };


  return (
    <Form noValidate validated={validated} >
      <div>
        <Row className="mb-3">
          <Form.Group className='column' as={Col} md="2" sm="6">
            <Form.Label>Index Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Index Number"
              name='std_index_num'
              value={std_index_num}
              id='std_index_num'
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='column' as={Col} md="3" sm="6" >
            <Form.Label>Student ID Number</Form.Label>
            <div style={{ display: 'flex' }}>
              <Form.Control
                required
                type="string"
                placeholder="Student Id Number"
                name='std_id_num'
                value={std_id_num}
                id='std_id_num'
                onChange={handleOnChange}
              />
              {/* <Form.Control
                required
                type="text"

                name='std_id_num'
                value={std_index_num.length > 0 ? `/ ${std_index_num}` : ''}
                id='std_id_num'
                disabled
                style={{ width: '60%', display: std_index_num.length > 0 ? 'flex' : 'none' }}

              /> */}
            </div>
          </Form.Group>

          <Form.Group className='column' as={Col} md="7" >
            <Form.Label>
              Student's name (write the first letters first, then last name write second)</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Student's Name"
              name="std_name"
              value={std_name}
              id='std_name'
              onChange={handleOnChange}
            />

          </Form.Group>
        </Row>
      </div>
      <div>
        <Row className="mb-3">
          <Form.Group className='column' as={Col} md="3" sm="6" >
            <Form.Label>Gender</Form.Label>
            <RadioBtn
              name="gender"
              options={genderOptions}
              selectedValue={selectedGender}
              onChange={handleGenderChange}
            />

          </Form.Group>
          <Form.Group className='column' as={Col} md="3" sm="6">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              required
              type="date"
              name='std_dob'
              value={std_dob}
              id='std_dob'
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='column' as={Col} md="3" sm="6">
            <Form.Label>Joining Date</Form.Label>
            <Form.Control
              required
              type="date"
              name='std_joining_date'
              value={std_joining_date}
              id='std_joining_date'
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className='column' as={Col} md="3" sm="6">
            <Form.Label>
              Nationality</Form.Label>
            <DropDown setData={setSelectedNationality} selectedData={selectedNationality} data={nationOption}
            />
          </Form.Group>

        </Row>
      </div>
      <div>
        <Row className="mb-3">
          <Form.Group className='column' as={Col} md="2" sm="6" >
            <Form.Label>
              Parents Religion</Form.Label>
            <DropDown setData={setSelectedParentsReligion} selectedData={selectedParentsReligion} data={parentsReligionOption} />
          </Form.Group>
          <Form.Group className='column' as={Col} md="3" sm="6" >
            <Form.Label>
              Parents/ Guardian Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="guardian_name"
              value={guardian_name}
              id='guardian_name'
              placeholder='Parents/ Guardian Name'
              onChange={handleOnChange}
            />

          </Form.Group>
          <Form.Group className='column' as={Col} md="3" >
            <Form.Label>
              Parents/ Guardian Address</Form.Label>
            <Form.Control
              required
              type="text"
              name="guardian_address"
              value={guardian_address}
              id='guardian_address'
              placeholder='Parents/ Guardian Address'
              onChange={handleOnChange}
            />

          </Form.Group>
          <Form.Group className='column' as={Col} md="2" sm="6" >
            <Form.Label>
              Previous School Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="std_previous_school_name"
              value={std_previous_school_name}
              id='std_previous_school_name'
              placeholder='Previous School Name'
              onChange={handleOnChange}
            />

          </Form.Group>
          <Form.Group className='column' as={Col} md="2" sm="6" >
            <Form.Label>
              Joining Grade</Form.Label>
            <Form.Control
              required
              type="string"
              name="std_joining_grade"
              value={std_joining_grade}
              id='std_joining_grade'
              onChange={handleOnChange}
              placeholder='Joining Grade'
            />

          </Form.Group>
        </Row>
      </div>
      {/* complete geades */}
      <div>
        <Row className="" style={{ textAlign: 'center' }}>
          <Form.Group className='column' as={Col} md="12" >
            <Form.Label style={{ fontSize: '18px', fontWeight: 600 }}>
              Year of completion for each grade in present school or previous school</Form.Label>
          </Form.Group>

        </Row>
        <Row className="complete_grade_year">
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              1st Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='first_grade'
              value={first_grade}
              id={`${first_grade}`}
              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              2nd Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='second_grade'
              value={second_grade}
              id={`${second_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              3rd Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='third_grade'
              value={third_grade}
              id={`${third_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              4th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='fourth_grade'
              value={fourth_grade}
              id={`${fourth_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              5th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='fifth_grade'
              value={fifth_grade}
              id={`${fifth_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              6th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='sixth_grade'
              value={sixth_grade}
              id={`${sixth_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              7th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='seventh_grade'
              value={seventh_grade}
              id={`${seventh_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              8th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='eighth_grade'
              value={eighth_grade}
              id={`${eighth_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              9th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='ninth_grade'
              value={ninth_grade}
              id={`${ninth_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              10th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='tenth_grade'
              value={tenth_grade}
              id={`${tenth_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>
          <Form.Group as={Col} md="1" sm="2" >
            <Form.Label>
              11th Grade</Form.Label>
            <Form.Control
              required
              type="number"
              name='eleventh_grade'
              value={eleventh_grade}
              id={`${eleventh_grade}`}

              onChange={handleOnChange}
              placeholder='year'
            />
          </Form.Group>

        </Row>
      </div>
      {/* advancedLevel */}
      <div>
        <Row className="">
          <Form.Group className='column' as={Col} md="6" >
            <Form.Label>
              12th Grade</Form.Label>
            <Row>
              <div className='col' md="6">
                <RadioBtn
                  name="twelfth"
                  options={advancedLevelSchemeOptions}
                  selectedValue={selectedTwelfthAl}
                  onChange={handleTwelfthScheme}
                />  </div>
              <div className='col' md="6">
                <Form.Control
                  required
                  type="text"
                  name="twelfth_year"
                  value={twelfth_year}
                  id='twelfth_year'
                  disabled={selectedTwelfthAl === '' ? true : false}
                  onChange={handleOnChange}
                  placeholder='Completed Year'
                />
              </div>
            </Row>


          </Form.Group>
          <Form.Group className='column' as={Col} md="6" >
            <Form.Label>
              13th Grade</Form.Label>
            <Row>
              <div className='col' md="6" sm="6">
                <RadioBtn
                  name="thirteen"
                  options={advancedLevelSchemeOptions}
                  selectedValue={thirteenAl}
                  onChange={handleThirteenScheme}
                />   </div>
              <div className='col' md="6" sm="6">
                <Form.Control
                  required
                  type="text"
                  name="thirteen_year"
                  value={thirteen_year}
                  id='thirteen_year'
                  disabled={thirteenAl === '' ? true : false}
                  onChange={handleOnChange}
                  placeholder='Completed Year'
                />
              </div>
            </Row>


          </Form.Group>
        </Row>

        <Row className="">

          <Form.Group as={Col} md="2" >
            <Form.Label>
              Special Grade</Form.Label>
          </Form.Group>

        </Row>
        <Row className="">
          <Form.Group as={Col} md="2" >
            <Form.Control
              required
              type="text"
              name="special_grade"
              value={special_grade}
              id='special_grade'
              onChange={handleOnChange}
              placeholder='Special Grade'
            />
          </Form.Group>
        </Row>
      </div>
      <div>
        <Row className="mb-3">
          <Form.Group className='column' as={Col} md="3" sm="6" >
            <Form.Label>
              Date of leaving school</Form.Label>
            <Form.Control
              required
              type="date"
              name="leaving_date"
              value={leaving_date}
              id='leaving_date'
              onChange={handleOnChange}
            />

          </Form.Group>

          <Form.Group className='column' as={Col} md="3" sm="6">
            <Form.Label>
              The date of the last return of the student who dropped out of school</Form.Label>
            <Form.Control
              required
              type="date"
              name="last_date"
              value={last_date}
              id='last_date'
              onChange={handleOnChange}
            />

          </Form.Group>
          <Form.Group className='column' as={Col} md="6"  >
            <Form.Label>
              Reason for leaving</Form.Label>

            <Form.Control as="textarea" rows={2} name="leaving_reason"
              value={leaving_reason}
              id='leaving_reason'
              onChange={handleOnChange} placeholder='Reason for Leaving' />


          </Form.Group>
        </Row>
      </div>
      <div>

        <Row className="mb-3">
          <Form.Group className='column' as={Col} md="3" sm="6" >
            <Form.Label>
              Student Action Form No</Form.Label>
            <Form.Control
              required
              type="text"
              name="std_action_form_num"
              value={std_action_form_num}
              id='std_action_form_num'
              onChange={handleOnChange}
              placeholder='Student Action Form No'
            />

          </Form.Group>
          <Form.Group className='column' as={Col} md="3" sm="6" >
            <Form.Label>
              Date of issue of Student Action Form </Form.Label>
            <Form.Control
              required
              type="date"
              name="std_sction_form_issue_date"
              value={std_sction_form_issue_date}
              id='std_sction_form_issue_date'
              onChange={handleOnChange} placeholder='Date of issue of Student Action Form'
            />

          </Form.Group>
          <Form.Group className='column' as={Col} md="6" >
            <Form.Label>
              Other Reason</Form.Label>
            <Form.Control as="textarea" rows={2}
              name="other_reason"
              value={other_reason}
              id='other_reason'
              onChange={handleOnChange}
              placeholder='Other Reason'
            />

          </Form.Group>
        </Row>
      </div>
      <div className=" d-md-block form-group">
        <div className="d-grid gap-2">
          <button className="btn btn-warning" onClick={handleSubmit} style={{ color: "#fff" }} type="submit">Update</button>
        </div>
      </div>
    </Form >
  );
}

export default UpdateForm;