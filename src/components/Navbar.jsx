import React, { useState } from 'react';
import {NavLink } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx'
import { classA } from '../data/data';
import "../index.css"

const Navbar = () => {
    const list = document.querySelectorAll('ul');
    const [iconClose , setIconClose] = useState(false);
    const Totrue = () => {setIconClose(true)
    }
    const Tofalse = () => {setIconClose(false)}


  return (
    <div className="flex justify-between p-3 text-main-color items-center nav z-1">
        <div>
            <img src="../../public/images/bee icon 1.png" alt="" />
        </div>
        <div className='md:hidden block p-2 rounded-md shadow-md cursor-pointer lg:text-3xl md:text-2xl sm:text-xl text-main-color'>
            {iconClose ?   <RxCross2 onClick={Tofalse}/> : <AiOutlineMenu onClick={Totrue} />}
        </div>
       
          <ul className={`md:flex md:items-center text-main-color md:z-auto md:static absolute w-full right-0 md:w-auto md:py-0 py-4 md:pr-0 pr-7 
          transition-all ease-in duration-500 ${iconClose === false ? 'top-[-400px] md:opacity-100 opacity-0  ':'top-20 opacity-100 bg-transparent-white' }`}>
               <li className="mx-4 my-6 md:my-0"> <NavLink to='#' className={classA}>الرئيسية</NavLink></li>
               <li className="mx-4 my-6 md:my-0"> <NavLink to='#' className={classA}>خدماتنا</NavLink></li>
               <li className="mx-4 my-6 md:my-0"> <NavLink to='#' className={classA}>المدونة</NavLink></li>
               <li className="mx-4 my-6 md:my-0"> <NavLink to='#' className={classA}>الدعم</NavLink></li>
          </ul>
        
        
        <ul className={`md:flex md:items-center text-main-color md:z-auto md:static absolute w-full right-0 md:w-auto md:py-0 md:pr-0 pr-7 
         transition-all ease-in duration-500 ${iconClose === false ? 'top-[-450px] md:opacity-100 opacity-0 flex justify-around items-center ':'top-80 opacity-100 flex justify-around items-center bg-transparent-white' }`}>
            <li className="mx-2 my-4 md:my-0"><button className="mx-1 w-[100%] text-md lg:px-6 md:px-12 py-3 hover:bg-gray-100 rounded-md transition-all duration-500 ease-in-out">تسجيل الدخول</button></li>
            <li className="mx-2 my-4 md:my-0"><button className="mx-1 w-[100%] text-md lg:px-6 md:px-12 py-3 hover:bg-blue-700 bg-main-color text-white rounded-md transition-all duration-500 ease-in-out">التسجيل</button></li>
        </ul>
       

    </div>
  )
}

export default Navbar