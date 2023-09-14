// import React, { Fragment, useState } from 'react'

// export default function Birthdate() {
//     const[Day,setDay]=useState('')
//     const[Month,setMonth]=useState('')
//     const[Year,setYear]=useState('')

//     const HandleDay = (event) =>{
//                 setDay(event.target.value)
//     }
//   return (
//     <>
//         <label htmlFor="Day" id='Day'>Day:</label>
//         <select name="Day" id="Day" onChange={HandleDay} >
//             {Array.from({length: 31},(_,index)=>index + 1).map((dayoption,index)=>(
//                 <option value={dayoption} key={index}>{dayoption}</option>
//             ))}

//         </select>
//     </>
//   )
// }
