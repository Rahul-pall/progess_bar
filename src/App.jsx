import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
function App() {

  const [value,setValue]=useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setValue((val)=>val+1)
    },100);
  },[])
  return (
    <>
    <h1 className='text-red-700 mb-8'>Progress bar</h1>
      <Loading value={value}/>
    </>
  )
}

export default App
