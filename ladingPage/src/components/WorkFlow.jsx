import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import code from '../assets/code.jpg'

import { checklistItems } from '../constants'

const WorkFlow = () => {
  return (


<div className="!mt-20 !px-4 sm:!px-10 lg:!px-20">

  <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center !mt-6 tracking-wide">
    Accelerate your <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">coding workflow.</span>
  </h2>


  <div className="flex flex-col-reverse lg:flex-row justify-center items-center max-w-6xl !mx-auto !mt-12 gap-10">
    
 
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      {checklistItems.map((ele, key) => (
        <div key={key} className="flex items-center gap-6 !mb-8">
          <div className="h-12 w-12 flex justify-center items-center text-green-400 bg-neutral-900 rounded-full shadow-md">
            <CheckCircle2 />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold">{ele.title}</h2>
            <p className="text-neutral-500 text-lg lg:text-xl">{ele.description}</p>
          </div>
        </div>
      ))}
    </div>


    <div className="w-full lg:w-1/2 flex justify-center">
      <img src={code} alt="Coding" className="max-w-full lg:h-[500px] object-contain rounded-lg shadow-lg" />
    </div>

  </div>
</div>

  )
}

export default WorkFlow