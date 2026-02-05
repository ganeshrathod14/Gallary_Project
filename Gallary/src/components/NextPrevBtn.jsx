import React from 'react'


const NextPrevBtn = ({index,setIndex,setUserData}) => {

    

  return (
    <div className='flex justify-center p-4 gap-10 items-center' >
        <button className='bg-amber-400 text-black  rounded px-4 py-2 font-semibold hover:-translate-y-1 shadow-[0px_07px_10px] shadow-gray-600'
        onClick={()=>{
          if(index>1)
          {
            setIndex(index-1)
            setUserData([])
          }
          console.log("Preveius Page Loaded")
        }}
        >Prev</button>
        <button className='bg-amber-400 text-black  rounded px-4 py-2 font-semibold hover:-translate-y-1 shadow-[0px_07px_10px] shadow-gray-600'
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
          console.log("Next Page Loaded")
        }}
        >Next</button>
    </div>
  )
}

export default NextPrevBtn