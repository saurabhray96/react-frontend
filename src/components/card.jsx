import React, { useState } from 'react'
import "./card.css"
const card = (props) => {
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
 let a=0;
  return (
   <>
   <div className='card w-screen h-screen  pt-14'>
   <h1 className='text-6xl float-left ml-10 font-serif text-white ' >Shadi</h1>
   <div className='float-right flex center mr-10 text-white text-xl name' >
    <button className='name'>Login</button><button className='rotate-90 name'>➤</button>
   </div>
   <div className='pt-10 mt-60 h-auto w-cover text-center'>
<span className='text-2xl text-white font-bold font-sans name'>Trusted Matrimony & Matchmaking Service</span>
<div className='text-center grid form'>
<form action="" className=' overflow-hidden  text-start w-screen pt-5 text-white pr-5' >

  <div className='float-left ml-5 '>
  <div className='text-black '>
    <span className='text-white font-normal font-serif' >I'm looking for a</span> <br />
  <select name="" id="" className=' w-44 rounded  text-sm p-1 bg-white'>
  <option value="man">man</option>
    <option value="women">women</option>
  </select>
  </div>
  </div>


  <div className='float-left ml-5 flex' >
    
  <div className='text-black '>
    <span className=' text-white font-normal font-serif' >aged</span> <br />
  <select name="" id="" className=' w-36  text-sm rounded p-1 bg-white mr-2'>
   {/* Map through the numbers array and create an option for each number */}
   {numbers.map(number => (
          <option className='' key={number} value={number}>{number}</option>
        ))}
  </select>
  </div>
  
  <div className='text-black text-white'>
    <span className='text-white font-normal font-serif' ></span> <br />
 To <select name="" id=""  className='text-black ml-2 text-sm rounded text-sm p-1 bg-white'>
  {/* Map through the numbers array and create an option for each number */}
  {numbers.map(numbers => (
          <option className='' key={numbers} value={numbers}>{numbers}</option>
        ))}
  </select>
  </div>
 
  </div>

  <div className='float-left ml-5'>
  <div className='text-black '>
    <span className='text-white font-normal font-serif' >of relifion</span> <br />
  <select name="" id="" className=' text-sm rounded p-1 bg-white'>
    <option value="Select">Select</option>
    <option value="HIndu">HIndu</option>
    <option value="Muslim">Muslim</option>
    <option value="Cristian">Cristian</option>
     </select>
  </div>
  </div>

  <div className='ml-5 float-left'>
  <div className='text-black '>
    <span className='text-white font-normal font-serif' >and mother tongue</span> <br />
  <select name="" id="" className=' text-sm rounded  text-sm p-1 bg-white'>
    <option value="Select">Select</option>
    <option value="Hindi">Hindi</option>
    <option value="English">English</option>
    <option value="Bhojpuri">Bhojpuri</option>
    <option value="Khadi">Khadi</option>
    <option value="Panjabi">Panjabi</option>
  </select>
  </div>
  </div>
<br />
<button className='p-2 text-white rounded btnlets hover:bg-cyan-800'>Let's Begin</button> 
</form>
</div>
   </div>
   </div>

<div className='text-center grid place-items-center mt-5'>
<div className='bg-rose-800 w-90 ml-6 mr-6 h-auto rounded'>
  <h2 className="text-amber-400 font-serif text-xl">Exclusive & Personalised Matchmaking by Shaadi.com</h2>
 <a href="/" className='decoration-none text-white border-r pr-2 pl-2 '>Top Rated Consultants
</a>
 <a href="/" className='decoration-none text-white border-r pr-2 pl-2 '>5 times higher success rates</a>
 <a href="/" className='decoration-none text-white border-r pr-2 pl-2 '>100% Privacy</a> <br />
 <div><h1 className='text-amber-400 text-6xl font-bold '>VIP<span className='font-normal text-white font-serif '>SHAADI</span><div className=' com text-2xl float-right'>.com</div></h1></div>

 <button className='bg-amber-300 w-96 h-8 rounded mt-2 mb-2 text-xl font-serif hover:bg-amber-600 '>Get Invited</button>
</div>
</div>

  <div className='w-cover h-12 text-center'>
  <h1 className='text-red-500 mt-10'>Find your Special Someone</h1>
  </div>
 
   </>
  )
}

export default card
