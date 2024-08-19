import { useState } from 'react';
import Dropdown from 'react-dropdown';

function DropDown({data,setData,selectedData}) {
   
    const onSelect = (e) => {
        setData(e)
    }
    return (
        <Dropdown options={data} onChange={(e) => onSelect(e.value)} value={selectedData} placeholder="Select" />
    );
}

export default DropDown;