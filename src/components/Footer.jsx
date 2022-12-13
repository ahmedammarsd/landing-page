import React from 'react';
import { FaPinterestP } from "react-icons/fa";
import { GrFacebookOption , GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import {mainContainer, styleIcons , titlesInFooters , styleLi , styleLink } from '../data/data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
    <div className={mainContainer}>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-9 mt-3 py-4">
            <div>
                <img className="my-3" src="/images/bee icon 1.png" />
                <p className="text-md mt-7 my-3 text-gray-500">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.</p>
                <div className='flex justify-evenly items-center mt-9 text-main-color'>
                    <span className={`${styleIcons} hover:text-red-app cursor-pointer hover:border-red-app hover:shadow-md`}><FaPinterestP /></span>
                    <span className={`${styleIcons} hover:text-f-book cursor-pointer hover:border-f-book hover:shadow-md `}><GrFacebookOption /></span>
                    <span className={`${styleIcons} hover:text-l-in cursor-pointer hover:border-l-in hover:shadow-md`}><GrLinkedinOption /></span>
                    <span className={`${styleIcons} hover:text-tw cursor-pointer hover:border-tw hover:shadow-md`}><AiOutlineTwitter /></span>
                </div>
            </div>
            <div>
              <h2 className={titlesInFooters}>عنا</h2>
              <ul className="mt-4">
                <li className={styleLi}><Link className={styleLink}>رابط سريع</Link></li>
                <li className={styleLi}><Link className={styleLink}>أعمالنا</Link></li>
                <li className={styleLi}><Link className={styleLink}>مدونتنا</Link></li>
                <li className={styleLi}><Link className={styleLink}>التواصل</Link></li>
              </ul>
            </div>
            <div>
              <h2 className={titlesInFooters}>الخدمات</h2>
              <ul className="mt-4">
                <li className={styleLi}><Link className={styleLink}>هذا النص مثال</Link></li>
                <li className={styleLi}><Link className={styleLink}>هذا النص مثال</Link></li>
                <li className={styleLi}><Link className={styleLink}>هذا النص مثال</Link></li>
                <li className={styleLi}><Link className={styleLink}>هذا النص مثال</Link></li>
              </ul>
            </div>
            <div>
              <h2 className={titlesInFooters}>الدعم</h2>
              <ul className="mt-4">
                <li className={styleLi}><Link className={styleLink}>مركز المساعدة</Link></li>
                <li className={styleLi}><Link className={styleLink}>الاستجابة</Link></li>
                <li className={styleLi}><Link className={styleLink}>الخصوصية</Link></li>
              </ul>
            </div>
        </div>
    </div>
    <div className="bg-gray-200">
      <div className={`${mainContainer} flex justify-between mb-0 text-sm`}>
          <h2>جميع الحقوق محفوظة لـ © Bee 2022 </h2>
          <h2>الشروط والأحكام</h2>
      </div>   
        </div>
    </div>
  )
}

export default Footer