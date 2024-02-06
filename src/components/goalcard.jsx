import React, {useState, useEffect} from 'react'

const goalcard = (goalcard) => {


  return (
    <div className='mb-10 grid place-items-center text-center  w-screen'>
   <div className='grid place-items-center mt-10 w-32 text-black  h-32 rounded-full  bg-cyan-400'>
   <svg className='bg-black text-4xl' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d={goalcard.imagePath} />
  <path d={goalcard.imagePath2} />
</svg>
<button className='absolute mt-28 bg-white h-10 w-10 rounded-full font-bold text-red-500 text-xl'>{goalcard.button}</button>
     </div>
     <h1 className='mt-10 text-2xl font-mono text-cyan-500'>{goalcard.name}</h1>
    <span className="font-sans text-gray-600 text-lg" >{goalcard.text}</span>
    </div>
  )
}

export default goalcard
