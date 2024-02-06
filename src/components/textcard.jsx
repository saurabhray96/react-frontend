import React from 'react'

const textcard = (text) => {
  return (
    <div className='text-center pb-12'>
        <p>{text.name}</p>
      <div className='border-t border-gray-400 mt-3 pt-4 '>
        <a href="/" className='decoration-none bordar-r '><button className='text-gray-500 border-r-2 pr-1 pl-1 text-sm  border-gray-500'>{text.p1}</button></a>
        <a href="/" className='decoration-none bordar-r '><button className='text-gray-500 border-r-2 pr-1 pl-1 text-sm  border-gray-500'>{text.p2}</button></a>
        <a href="/" className='decoration-none bordar-r '><button className='text-gray-500 border-r-2 pr-1 pl-1 text-sm  border-gray-500'>{text.p3}</button></a>
        <a href="/" className='decoration-none bordar-r '><button className='text-gray-500 border-r-2 pr-1 pl-1 text-sm  border-gray-500'>{text.p4}</button></a>
        <a href="/" className='decoration-none bordar-r '><button className='text-gray-500 border-r-2 pr-1 pl-1 text-sm  border-gray-500'>{text.p5}</button></a>
        <a href="/" className='decoration-none bordar-r '><button className='text-gray-500 border-r-2 pr-1 pl-1 text-sm  border-gray-500'>{text.p6}</button></a>
  <br />
  <div className='justify-center flex'><h2 className='text-lg font-sans text-cyan-500'>More Matrimonials</h2><button className='text-sm text-gray-500 font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button></div>
   </div>
    </div>
  )
}

export default textcard
