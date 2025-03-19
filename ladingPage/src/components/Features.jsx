import React from 'react'
import { features } from '../constants'

const Features = () => {
  return (


<div className="relative min-h-[800px] !mt-20 border-neutral-800 border-b !px-4 sm:!px-10 lg:!px-20">

  <div className="text-center max-w-4xl !mx-auto">
    <span className="text-orange-600 bg-neutral-800 rounded-full !px-4 !py-1 text-lg uppercase font-medium">
      Features
    </span>
    <h2 className="text-3xl sm:text-5xl lg:text-6xl !mt-6 lg:!mt-12 tracking-wide">
      Easily build <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">your code.</span>
    </h2>
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 !mt-10 lg:!mt-20 max-w-6xl !mx-auto">
    {features.map((ele, key) => (
      <div key={key} className="flex items-start gap-4 p-4">
      
        <div className="h-12 w-12 !p-2 bg-neutral-900 text-orange-900 flex justify-center items-center rounded-full shadow-md">
          {ele.icon}
        </div>

        
        <div>
          <h5 className="text-xl font-semibold">{ele.text}</h5>
          <p className="text-md text-neutral-500 leading-relaxed !mt-2">{ele.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Features