import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents, handleLimit, handleSearch, searchStds } from '../features/studentAuth/studentSlice'
import { FaSearch } from 'react-icons/fa'
import close from '../images/close.png'
const SearchBar = () => {
    const dispatch = useDispatch()
    const { isLoading,searchQuery } = useSelector(state => state.student);

    const [searchTxt, setSearchTxt] = useState(searchQuery)
    const handleOnclick = (e) => {
        e.preventDefault()
        const searchData = { searchTxt }
        dispatch(searchStds(searchData))
        dispatch(handleLimit(1))

    }
    const handleOnChange = (e) => {
        setSearchTxt(e.target.value)
     dispatch(handleSearch(e.target.value))

    }
    const handleClear = () => {
        setSearchTxt('')
        dispatch(getStudents())
        dispatch(handleLimit(1))
        dispatch(handleSearch(''))

    }
    return (
        <form style={{ display: 'flex', flexDirection: 'row' }} onSubmit={handleOnclick}>
            <div className="search-box">
                <input type="text" placeholder="Search student..." onChange={handleOnChange} value={searchTxt} />

                <img src={close} alt="" height={17} width={17} onClick={handleClear} style={{ visibility: searchTxt.length > 0 && !isLoading ? 'visible' : 'hidden' }} />
                <button type="button" className="" onClick={handleOnclick}>

                    <FaSearch color='#000' />
                </button>
            </div>
        </form>
    )
}

export default SearchBar
