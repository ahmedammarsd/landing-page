import React from 'react';
import img from "../images/half-circle.png";
import img2 from "../images/circle.png";
import img3 from "../images/circle2.png";


const Start = () => {
  return (
    <div className="container px-5 lg:px-5 md:px-3 sm:px-2 mx-auto py-6 my-2 overflow-hidden">

        <div className="w-full h-80 relative p-7 bg-purple rounded-2xl overflow-hidden">
            <img src={img} className="absolute top-0 left-20" />
            <img src={img2} className="absolute bottom-0 left-72" />
            <img src={img3} className=" absolute top-0 right-0" />
            <div>
                <h2 className="text-xl lg:text-5xl md:text-3xl sm:text-xl text-white mt-4 p-2 mb-4">كفى كلامًا ، فلنبني شيئًا رائعا</h2>
                <div className="flex justify-between items-center flex-wrap">
                <p className="text-sm lg:text-xl md:text-sm text-gray-50  p-2 my-4 w-[60%]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص..</p>
                <button className="p-4 px-7 bg-gray-200 w-[20%] text-main-color rounded-lg hover:bg-gray-300 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg">لنبدأ الآن</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Start