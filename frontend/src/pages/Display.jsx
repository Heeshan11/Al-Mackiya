import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from '../features/studentAuth/studentSlice'
import DisplayTable from '../components/DisplayTable'
import Empty from '../components/Empty'
import SearchBar from '../components/SearchBar'

const Display = () => {
    const { studentDetails } = useSelector((state) => state.student)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <div className='tblContainer' style={{
            overflow: studentDetails.total > 0 ? "scroll" : 'unset',  margin: 'auto', marginTop: '20px',

        }} >
            {studentDetails?.students?.length > 0 ?

                <>
                    <DisplayTable />         </>
                : <Empty />}

        </div>
    )
}

export default Display
