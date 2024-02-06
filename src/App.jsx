import React, {useState,useEffect} from 'react'
import Card from './components/card'
import Goalcard from './components/goalcard'
import Jodacard from './components/jodacard'
import Textcard from './components/textcard'
import Footer from './components/footer'
const App = () => {

 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 let jcard2=false;
 let jcard3=false;
  if (screenWidth>=665) {
   jcard2=true;
   if(screenWidth>=1000)
   jcard3=true;
  }
  else{
  jcard2=false;
jcard3=false;}

  return (
  <>
 
 <Card />
 <Goalcard imagePath="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398" button="1" name="Signup" text="Register for free & put up your Matrimony Profile" />
  <Goalcard imagePath="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" imagePath2="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" button="2" name="Connect" text="Select & Connect with Matches you like" />
  <Goalcard imagePath="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" button="3" name="Interact" text="Become a Premium Member & Start a Conversation" />
  <div className='text-center text-red-500 text-xl font-sans'>Matrimony Service with Millions of Success Stories</div>
 <div className='w-screen flex'> <Jodacard/>
 {jcard2 && <Jodacard/>}
 {
jcard3 && <Jodacard/>

 }
 </div>
   <div className='text-center pt-5 pb-5 bg-rose-500 text-white'>
    <h1 className='text-2xl font-serif' >Your story is waiting to happen!</h1>
    <button className='pt-2 pb-2 pl-12 pr-12 mt-4 border-2 border-white rounded'> Get Starded</button>
  </div>
  <h1 className='text-center text-xl mt-5 mb-5'>India's No.1 Matrimony Service</h1>
  <Textcard name="Mother Tongue" p1="Bengali" p2="Gujarati" p3="Kannada" p4="Malayalam" p5="Marathi" p6="Odia" />
  <Textcard name="Religion" p1="Buddhist" p2="Christian" p3="Jain" p4="Muslim" p5="" p6="" />
  <Textcard name="Community" p1="Adi Dravida" p2="Arya Vysya" p3="Brahmin" p4="Ezhava" p5="Iyer" p6="Kamma" />
 <Footer />
 <Textcard p1="India" p2="USA" p3="Canada" p4="Australia" p5="UAE" p6="NRI Matrimonials" />
 <div className='text-center mb-4'><button className=' pl-4 pr-4 pt-2 pb-2 bg-cyan-400 hover:bg-cyan-600'>Trusted by Millions</button></div>
 </>
  )
}

export default App
