import React from 'react'
import shadi from '../../public/shadi1.jpg'
const jodacard = () => {
    const imgUrl='url("../../public/shadi1.jpg")';
  return (
    <>
      <div className= ' pb-12 overflow-hidden h-96 mb-10 cursor-pointer hover:shadow hover:shadow-black hover:shadow-lg ml-12 mr-12'>
      <div  className='h-60 overflow-hidden ' style={{ backgroundImage:imgUrl,backgroundPosition:"0px -120px ",backgroundSize:"cover"}}></div>
<h3 className='text-xl m-2 font-sans text-gray-800'>Shubham & Nodhi</h3>
<span className='text-sm m-2'>
Marriage is a sacred union between two individuals, marked by love, commitment, and companionship. It represents the beginning of a lifelong journey filled with 
shared experiences, joys, and challenges. As a married couple, partners embark on a path of growth, understanding, and mutual support, navigating life's ups and downs together. Communication, trust, and respect form the foundation of a
strong marital bond, fostering harmony and connection. Through marriage, couples create a supportive environment where they can thrive individually and as a unit, building a future
 based on shared dreams and aspirations. Together, they celebrate milestones, overcome obstacles, and create lasting memories that strengthen their relationship. With each passing year,
  the bond between husband and wife deepens, enriched by love, loyalty, and shared experiences.</span>
      </div>
    </>
  )
}

export default jodacard
