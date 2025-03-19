import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="!mt-20 tracking-wide !px-4">
   
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold !my-10 lg:!my-20">
        What People Are Saying
      </h2>

    
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 !px-4">
            <div className="bg-neutral-900 rounded-xl !p-6 text-md border border-neutral-800 font-thin shadow-lg">
              <p className="text-neutral-300 italic">"{testimonial.text}"</p>

          
              <div className="flex items-center !mt-6">
                <img
                  className="w-14 h-14 rounded-full border border-neutral-300 shadow-md"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div className="!ml-4">
                  <h6 className="font-semibold text-lg text-white">
                    {testimonial.user}
                  </h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
