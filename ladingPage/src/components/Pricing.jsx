import React from "react";
import { CheckCircle2, CheckIcon } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="!mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center">
      Pricing
        </h2>
      <div className="flex flex-wrap !mt-10 !pl-4 !pr-4">
        {pricingOptions.map((ele,key)=>(
            <div className="w-full sm:w-1/2 lg:w-1/3 !p-2 " key={key}>
                <div className="!p-8 border border-neutral-700 rounded-xl">
                   <h2 className="text-4xl !mb-8 gap-2 flex items-center">{ele.title}{ele.title==='Pro'&&(<p className="text-4xl bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text ">(Most Popular)</p>)}</h2>
                   <p className="!mb-8">
                    <span className="!mt-5xl !mr-2 text-5xl">{ele.price}</span>
                    <span className="text-neutral-500 tracking-tight">/Month</span>
                   </p>
                   <ul>
                    {ele.features.map((ele,key)=>(
                      <li key={key} className="!mt-8 flex gap-2"><CheckIcon/>
                      <span>{ele}</span>
                      </li>
                    ))}
                   </ul>
                   <a href="" className="inline-flex w-full justify-center items-center text-center border !mt-20 hover:bg-orange-500 border-orange-900 rounded-lg transition duration-200 h-12 leading-tight tracking-tight">Subscribe</a>
                   
                </div>
            </div>
        ))}
        </div>  
    </div>
  );
};

export default Pricing;