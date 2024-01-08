import React, { useEffect, useState } from 'react'

const Loading = ({value}) => {
              const [percentage,setPercentage]=useState(value);

              useEffect(()=>{
                    setPercentage(Math.min(100,Math.max(value,0)))        
              },[value])
  return (
    <div className='border-2 rounded-xl w-96 h-8 relative overflow-hidden'>
      <div className='absolute left-[170px] flex justify-center' style={{color:percentage>49?"whitesmoke":"white"}}>{percentage.toFixed()}%</div>
      <div className='bg-red-600 w-[100%] h-[100%] '  style={{width:`${percentage}%`}}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage.toFixed()}
      ></div>
    </div>
  )
}

export default Loading;
