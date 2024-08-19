import React from 'react'
import { TfiFaceSad } from "react-icons/tfi";

const Empty = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}>
      <TfiFaceSad/><h1>No Records</h1>
    </div>
  )
}

export default Empty
