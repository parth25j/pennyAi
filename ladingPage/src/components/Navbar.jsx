import React,{useState} from 'react'
import { navItems } from '../constants/index'
import { Menu,X } from 'lucide-react'

const Navbar = () => {
    const [mobile,setMobileDrawerOpen] = useState(false)
    const handleDrawer = ()=>{
        setMobileDrawerOpen(!mobile)
    }
  return (

    <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-neutral-700">
     
      <div className="container !mx-auto flex items-center justify-between !py-4 !px-6 lg:!px-10">
      
        <div className="flex items-center gap-3">
          <img src="" alt="PennyAI Logo" className="h-8 w-auto" />
          <span className="text-white font-bold text-lg">PennyAI</span>
        </div>

      
        <ul className="hidden lg:flex gap-8 text-white">
          {navItems.map((ele, key) => (
            <li key={key} className="hover:text-orange-400 transition duration-200 cursor-pointer">
              <a href={ele.href}>{ele.label}</a>
            </li>
          ))}
        </ul>

       
        <div className="hidden lg:flex gap-6">
          <button className="border !px-4 !py-2 rounded text-white hover:bg-neutral-800 transition">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-800 !px-4 !py-2 rounded text-white">
            Create an Account
          </button>
        </div>

        
        <button onClick={handleDrawer} className="lg:hidden text-white">
          {mobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {mobile && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full !p-4 flex justify-center items-center flex-col lg:hidden border gap-4">
            <ul className='flex flex-col gap-3 !mb-4 !mt-2'>
                {navItems.map((ele,key)=>{
                    return(
                       <li key={key}><a href="">{ele.label}</a></li>
                    )
                })}
            </ul>
            <div className="button-container gap-4 tracking-tight flex !mb-3">
            <button className='border !px-2 !py-2 rounded' >Sign In</button>
            <button className='bg-gradient-to-r from-orange-500 to-orange-800 !px-2 !py-2 rounded' >Create an account</button>
         </div>
        </div>
       )}
   
    </nav>
  )
}

export default Navbar



    // <nav className='sticky top-0 z-50 !py-3 backdrop-blur-lg border-b border-neutral-700/80' >
    //    <div className="container text-[1rem] text-white flex items-center justify-between w-full !py-4 gap-5 !mx-auto ">
    //      <div className="image flex gap-2">
    //         <img src="" alt="image" />
    //         <span className='font-bold'>PennyAI</span>
    //      </div>
    //      <div className="nav-items">
    //         <ul className='hidden lg:flex gap-7'>
    //             {/* <li className='cursor-pointer hover:border-b-2 border-pink-400'>Home</li>
    //             <li className='cursor-pointer hover:border-b-amber-50'>Workflow</li>
    //             <li className='cursor-pointer hover:border-b-amber-50'>Pricing</li>
    //             <li className='cursor-pointer hover:border-b-amber-50'>Testimonials</li> */}
    //            {navItems.map((ele,key)=>{
    //             return(
    //                 <li key={key}><a href="">{ele.label}</a></li>
    //             )
    //            })}

    //         </ul>
    //      </div>
    //      <div className="hidden button-container lg:flex gap-8 tracking-tight ">
    //         <button className='border !px-2 !py-2 rounded' >Sign In</button>
    //         <button className='bg-gradient-to-r from-orange-500 to-orange-800 !px-2 !py-2 rounded' >Create an account</button>
    //      </div>
    //      <div className="drawer lg:hidden md:flex">
    //         <button onClick={handleDrawer}>{mobile?<X/>:<Menu/>}</button>
    //      </div>
    //    </div>
    //    {mobile && (
    //     <div className="fixed right-0 z-20 bg-neutral-900 w-full !p-4 flex justify-center items-center flex-col lg:hidden border gap-4">
    //         <ul className='flex flex-col gap-3 !mb-4 !mt-2'>
    //             {navItems.map((ele,key)=>{
    //                 return(
    //                    <li key={key}><a href="">{ele.label}</a></li>
    //                 )
    //             })}
    //         </ul>
    //         <div className="button-container gap-4 tracking-tight flex !mb-3">
    //         <button className='border !px-2 !py-2 rounded' >Sign In</button>
    //         <button className='bg-gradient-to-r from-orange-500 to-orange-800 !px-2 !py-2 rounded' >Create an account</button>
    //      </div>
    //     </div>
    //    )}
    // </nav>