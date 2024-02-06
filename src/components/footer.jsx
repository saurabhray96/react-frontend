import React from 'react'
import saurabh1 from "../../public/saurabh1.jpg"
const footer = () => {
  return (
    <div className='text-start p-4'>
      <div className='text-center grid justify-center border-b border-black'>
        <img src={saurabh1} alt=".." className='w-28 h-28 rounded mt-4 mb-4' />
      </div>
      <span className='text-start '>Shaadi.com, India’s No.1 Matchmaking and Matrimony Service*, was founded with a simple objective - to help people find happiness. Shaadi.com is a leader in what is sometimes known as the matrimony category, we have touched more than 50 million lives.

Shaadi.com - a trusted matrimonial & matchmaking service, has always differentiated itself from other matrimonials through its innovation-led approach by redefining the way Indian brides and grooms meet for marriage.

We have also created trusted and renowned community specific matrimony platforms such as TamilShaadi.com, TeluguShaadi.com, MalayaleeShaadi.com, KannadaShaadi.com, BengaliShaadi.com, GujaratiShaadi.com, MarathiShaadi.com, PunjabiShaadi.com and more that has changed the way of finding a life partner.

Shaadi.com (sometimes mis-spelt as Shadi.com, Shadhi.com or Sadi.com) is a social networking site specialising in matchmaking and not just a matrimonial service.</span> <br /> <br />
   <em className=''>* Based on the number of downloads in the last 12 months of the Shaadi.com App – as reported by AppTweak.</em>
    </div>
  )
}

export default footer
