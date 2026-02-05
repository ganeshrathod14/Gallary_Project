import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
                <div className='h-50 w-50  overflow-hidden rounded-xl bg-amber-50 shadow-[3px_10px_10px]'> 
                <img className='h-full w-full object-cover'  src={props.elem.download_url} alt="" />
               </div>
               <h2 className='pt-3'> {props.elem.author} </h2>
               </a>
    </div>
  )
}

export default Card