import React,{useState} from 'react'

const Notification = ({type,message,visible=false}) => {
  const [isVisible,setIsVisbile]=useState(visible);

  console.log(type)
  return (
    <div className={`absolute top-5 right-5 py-1.5 px-4 text-lg font-semibold rounded-md text-white ${!type?'bg-slate-500 ':(type==='success'?'bg-green-600':'bg-red-600')}`}>{message}</div>
  )
}

export default Notification