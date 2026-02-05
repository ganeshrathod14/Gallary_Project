import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import NextPrevBtn from './components/NextPrevBtn'
import Indexing from './components/Indexing'




const App = () => {

  const [userData, setUserData] = useState([])

    const [index, setIndex] = useState(1)

  const getdata = async() => {
   
    
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   
      setUserData(response.data)
      console.log(response.data)
      
  }

  let printUserdata = <h3 className='text-gray-800 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> Loading... </h3>

  if(userData.length>0)
  {
    printUserdata = userData.map((elem,idx)=>{
      return (
      <div key={idx}>
        <Card elem={elem}  />
      </div>
      )
      
    })
  }

  useEffect(()=>{
    getdata()
  },[index])
  
  return (
    <div className='p-10'>
      <div className='flex flex-wrap gap-4 px-20  '>
        {printUserdata}
      </div>
      <div>
        <Indexing  index={index} />
      <div className='flex justify-center p-4 gap-10 items-center '>
        <NextPrevBtn 
        index={index}
        setIndex={setIndex}
        setUserData={setUserData}
        />
      </div>
      </div>
    </div>
  )
}

export default App