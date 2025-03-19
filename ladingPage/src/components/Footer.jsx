import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
  

<footer className="!mt-20 border-t !py-10 border-neutral-700 !px-6">

  <div className="max-w-5xl !mx-auto flex flex-col items-center">
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
  
      <div>
        <h3 className="text-lg font-semibold !mb-4 text-white">Resources</h3>
        <ul className="space-y-2">
          {resourcesLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-neutral-400 hover:text-white transition duration-200">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold !mb-4 text-white">Platform</h3>
        <ul className="space-y-2">
          {platformLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-neutral-400 hover:text-white transition duration-200">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold !mb-4 text-white">Community</h3>
        <ul className="space-y-2">
          {communityLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-neutral-400 hover:text-white transition duration-200">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    
    <div className="text-center text-neutral-500 text-sm !mt-8">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  </div>
</footer>


  );
};

export default Footer;