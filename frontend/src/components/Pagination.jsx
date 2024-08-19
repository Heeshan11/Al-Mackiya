import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { handleLimit } from '../features/studentAuth/studentSlice';

const PaginationComponent = () => {
    const { studentDetails, limit, searchQuery } = useSelector(state => state.student);
    const [active, setActive] = useState(1)
    const dispatch = useDispatch()
    const handlePageChange = (num) => {
        setActive(num)
        dispatch(handleLimit(num))
    }
  

    let items = [];
    for (let number = 1; number <= Math.ceil(studentDetails?.total / 50); number++) {
        items.push(
            <Pagination.Item key={number} active={number === limit} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            {studentDetails?.total > 50 && searchQuery.length ===0 ? <Pagination size="sm" >{items}</Pagination> : null}
        </div>
    )
}

export default PaginationComponent
