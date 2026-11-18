import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import hero from './Hero'
import about from './About'
import Howtouse from "./Htu"
import { BsMoon, BsMoonStars } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';      // Clean / Line style (Feather Icons)
import { FaMoon, FaRegMoon } from 'react-icons/fa'; // Solid & Outline (FontAwesome)
import { HiMoon, HiOutlineMoon } from 'react-icons/hi'; // Solid & Outline (HeroIcons)

import { FiSun } from 'react-icons/fi';      // Minimalist Sun (Feather)
import { FaSun, FaRegSun } from 'react-icons/fa'; // Bold Solid/Outline (FontAwesome)
import { HiSun, HiOutlineSun } from 'react-icons/hi'; // HeroIcons
import { BsSun } from 'react-icons/bs';       // Bootstrap Icons
import { useState ,useEffect} from "react";
import { IoMenuOutline } from "react-icons/io5";
import { FaSkullCrossbones } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

 
export default function Navbar({dark,set_dark}) {
    
    const links_name = ['Home', 'About', 'How to use']
    const [isopen,setOpen]=useState(false)
    const [theme,setTheme]=useState(()=>{
        return localStorage.getItem('theme')||'white'
    })
    useEffect(()=>{
         console.log('mode changes before',dark)
    if(theme==='white'){
        set_dark(false)
         localStorage.setItem('theme','white');  
     
    }
    if(theme==='black'){
        set_dark(true)
          localStorage.setItem('theme','black') 
      
    }
    console.log('mode after changes',dark)
    console.log('hello this local theme changer',localStorage.getItem('theme'))

   },[theme])
    
   

   const togglebtn=()=>{
     if(theme==='white'){
        // set_dark(!dark)
       
        setTheme('black')
         
     }else{
      
        setTheme('white')
     }
     
    }
  
    
    
    

    
    
    
    return (
        <nav className={`box fixed top-0 w-full z-50  font-['sans-serif'] 
            ${dark&&('box2 text-[#e6edf3] ')}`}>
            <div className="max-w-7xl mx-auto px-20 py-5 hidden  md:flex justify-between items-center relative ">
              
                <span className="flex item-center justify-center gap-5 text-2xl  text-[#656d76 ]">
                   <span><img
  src="/favicon.svg"
  alt="MD Parser"
  width="32"
  height="42"
/>  </span>
                   <span>MD STUDIO</span>
                    
                </span>
                <span>
                    <Link>
                    <BsGithub className="text-2xl  text-[#656d76 ] " />
                    </Link>
                </span>
                    <ul className="flex items-center gap-10  ">
                        {
                            links_name.map((name, index) => (
                                <li key={index} className="navbar text-xl  text-[#656d76 ]">
                                    {name === "Home" ? (
                                        <Link to="/">{name}</Link>
                                    ) : (
                                        <Link to={`/${name.replace(/\s+/g, '-').toLowerCase()}`}>
                                            {name}
                                        </Link>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                    <button onClick={togglebtn}>
                       
                            {dark?(
                                <FiSun className="sun text-2xl  text-[#656d76 ]"></FiSun>
                            ):(
                                <FaRegMoon className="moon text-2xl  text-[#656d76 ] " />   
                            )
                        
                            }

                        
                    </button>
                   
                    
            </div>
            <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between md:hidden   relative ">
                <div className="flex gap-10">
                 <span className="text-xl  text-[#656d76 ] sm:text-2xl">
                    MD PARSER
                </span>
                    <span><BsGithub className="text-2xl  text-[#656d76 ] " /></span>        
                 <button onClick={togglebtn}>
                       
                            {dark?(
                                <FiSun className="sun mt-1 text-lg  sm:text-xl text-[#656d76 ]"></FiSun>
                            ):(
                                <FaRegMoon className="moon mt-1 text-lg  sm:text-xl text-[#656d76 ] " />   
                            )
                        
                            }

                        
                    </button>
                   
                </div>
               
                
                <button onClick={()=>setOpen(!isopen)}>

                 <span >
                    {!isopen ?( <IoMenuOutline className="text-2xl sm:text-3xl text-[#656d76 ] " /> ): (<FaSkullCrossbones className="text-xl sm:text-2xl  text-[#656d76 ] " />)}
                 </span>
                 </button>
                 
                    
            </div>
                           
            
              
                    <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1f2937] px-8 border-t border-[#e5e7eb] dark:border-[#374151] overflow-hidden transition-all duration-300 ease-in-out
                     ${isopen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
                        {links_name.map((name, index) => (
                            <li key={index} className="navbar list-none text-lg py-2 text-[#111827] dark:text-[#e6edf3] ">
                                {name === "Home" ? (
                                    <Link to="/" onClick={() => setOpen(false)}>{name}</Link>
                                ) : (
                                    <Link to={`/${name.replace(/\s+/g, '-').toLowerCase()}`} onClick={() => setOpen(false)}>
                                        {name}
                                    </Link>
                                )}
                            </li>

                        ))}
                    </div>
              
            
        </nav>
    )
}