import React, { useState } from 'react'
import Input from './input/Input'
import '../App.css'


const OTP = () => {
  
    const [otp,setOtp]=useState(new Array(4).fill(""))

    const InputChange=(element , index)=>{
        console.log("submit",index)

        if(isNaN(element.value)) return false

        setOtp([...otp.map((d,idx)=>{ return (idx===index)? element.value :d})])
        
        if(element.nextSibling){
            element.nextSibling.focus()
        }
    }
  return (<>
  <h1>Enter OTP</h1>
   {
    otp.map((data,index)=>{
        return <input
         className='otp'
        type="text"
        name="otp"
        maxLength="1"
        key={index}
        value={data}
        onChange={e=>InputChange(e.target, index)}
        onFocus={e=>e.target.select()}
        />
    })
}
   <p>OTP- {otp.join("")}</p>
   <button onClick={e=>setOtp([...otp.map(d=>"")])}>clear</button>
   <button onClick={e=>{alert(otp.join("")); setOtp([...otp.map(d=>"")]); console.log(otp.join(""))}}>submit</button>

</>
  )
}

export default OTP