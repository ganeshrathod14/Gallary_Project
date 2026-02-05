import React from 'react'
import { ArrowRightToLine } from 'lucide-react'
import { ArrowLeftToLine } from 'lucide-react'

const Indexing = (props) => {
  return (
    <div>
        <h1 className='flex items-center justify-center gap-5 pt-4  '>
      <ArrowLeftToLine size={16} />
       Page {props.index}  
      <ArrowRightToLine size={16} />
      </h1>
    </div>
  )
}

export default Indexing