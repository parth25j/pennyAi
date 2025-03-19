import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (


<div className="flex flex-col items-center text-center !px-4 sm:!px-10 lg:!px-20 !mt-10 lg:!mt-20">
 
      <h1 className="tracking-wide text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl">
        Virtual build tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          for developers.
        </span>
      </h1>

     
      <p className="!mt-6 text-lg sm:text-xl lg:text-2xl max-w-3xl text-gray-400 leading-relaxed">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      
      <div className="!mt-8 flex flex-wrap justify-center gap-6">
        <a href="#" className="border border-white !py-3 !px-6 rounded-lg text-white font-semibold hover:bg-white hover:text-black transition">
          Start for free
        </a>
        <a href="#" className="bg-gradient-to-r from-orange-500 to-red-500 !py-3 !px-6 rounded-lg text-white font-semibold hover:opacity-80 transition">
          Check our pricing
        </a>
      </div>

    
      <div className="!mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        <video autoPlay loop muted className="border border-orange-700 rounded-lg shadow-lg w-full h-64 object-cover">
          <source src={video1} type="video/mp4" />
        </video>
        <video autoPlay loop muted className="border border-orange-700 rounded-lg shadow-lg w-full h-64 object-cover">
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>

  )
}

export default Hero


//     <div className='flex !mt-10 lg:!mt-20 items-center flex-col'>
//         <h1 className=' tracking-wider text-4xl sm:text-4xl lg:text-7xl sm:tracking-tight'>Virtual build tools{" "}<span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">for developers.</span></h1>
//         <p className='!my-10 text-center max-w-4xl font-light tracking-wider lg:text-[1.5rem] text-gray-400'>Empower your creativity and bring your VR app ideas to life with our
//         intuitive development tools. Get started today and turn your imagination
//         into immersive reality!</p>
//         <div className="flex !my-10 gap-10 items-center ">
//             <a href="" className='border !py-3 !px-2 rounded'>Start for free</a>
//             <a href="" className='bg-gradient-to-r from-orange-500 to-red-500 !py-3 !px-2 rounded-md'>Check our pricing</a>
//         </div>
//         <div className="flex justify-center !mt-10 w-full gap-5">
//   <video autoPlay loop muted className='border border-orange-700 h-[350px] rounded-lg shadow-lg w-1/3 !mx-2 !my-4 object-fill'>
//     <source src={video1} type='video/mp4'/>
//   </video>
//   <video autoPlay loop muted className='border border-orange-700 h-[350px] rounded-lg shadow-lg w-1/3 !mx-2 !my-4 object-fill'>
//     <source src={video2} type='video/mp4'/>
//   </video>
// </div>

//     </div>