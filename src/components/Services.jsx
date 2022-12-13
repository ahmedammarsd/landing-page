import React from 'react';
import { WiDirectionLeft } from 'react-icons/wi'
import { dataCards } from '../data/data';

const Services = () => {
  return (
    <div className="container lg:px-5 md:px-3 sm:px-2 mx-auto py-16">
        <div className="flex flex-col items-center justify-between">
            <h2 className="text-main-color text-xl lg:text-5xl md:text-3xl sm:text-xl font-semibold leading-[58px]"> الخدمات المقدمة لك</h2>
            <p className="mt-[35px] text-sm lg:text-xl md:textxl sm:text-sm text-gray-500 w-[60%] text-center">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى</p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-3 py-4">
            {dataCards.map( (item,index) => (
                <div key={index} className="flex flex-col justify-center items-center bg-white
                 border border-gray-50 rounded-2xl py-8 px-2 hover:shadow-xl hover:shadow-gray-200">
                    <div className="shadow-md rounded-xl p-4 m-6">
                        <img src={`../../public/${item.icon}`} />
                    </div>
                    <div className="font-semibold text-xl text-main-color mt-4">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="text-sm m-3 mt-4 text-gray-500 text-center">
                        <p>{item.body}</p>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                      <a className="m-2 text-main-color"> {item.button}</a>  <WiDirectionLeft />
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Services