import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { gridColms, mainContainer } from "../data/data";

const Experiens = () => {
  return (
    <div className={mainContainer}>
      <div className={gridColms}>
        <div className="relative p-20">
          <div className="image w-full h-full">
            <img src="../images/image2.jpg" className="w-full h-full"/>
          </div>
          <div className=" bg-white rounded-lg shadow-md p-6 absolute xl:-bottom-4 lg:-bottom-4 md:bottom-5 sm:bottom-10 bottom-16 left-4 hover:shadow-lg">
            <div className=" bg-red-600 rounded-[100%] p-4 w-[25%] h-[25%] shadow-2xl shadow-rose-600 float-left -mt-9">
              <img src="/images/Union5.png" />
            </div>
            <div>
              <h3 className=" font-semibold">مصنفة عالميا</h3>
              <p className=" text-gray-500"># 1 وكالة تسويق</p>
            </div>
            <div>
              <div className="flex justify-between items-center w-full gap-7">
                <div className="flex justify-between items-center ">
                  <img src="/images/image3.jpg" />
                  <div>
                    <h4 className="text-md text-main-color font-semibold">
                      هذا النص مثال
                    </h4>
                    <span className="text-sm text-gray-500">هذا النص مثال</span>
                  </div>
                </div>
                <h5 className="text-sm text-main-color font-semibold">
                  + 40 نقطة
                </h5>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-between items-center">
                  <img src="/images/image3.jpg" />
                  <div>
                    <h4 className="text-md text-main-color font-semibold">
                      هذا النص مثال
                    </h4>
                    <span className="text-sm text-gray-500">هذا النص مثال</span>
                  </div>
                </div>
                <h5 className="text-sm text-main-color font-semibold">
                  + 40 نقطة
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div >
            <h2 className="text-xl lg:font-bold lg:text-5xl md:font-semibold md:text-3xl sm:text-xl p-2 mb-2 text-main-color">قبل أن ننقل خبراتنا ، خضنا التجربة</h2>
            <p className=" text-sm text-gray-500 p-2 mb-2 mt-7">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.
            </p>
            <div className="mt-7">
                <p className="flex items-center gap-2 mt-2">
                    <span className=" text-main-color"><BsCheckCircleFill /></span>
                    <span className=" text-gray-500">هذا النص هو مثال</span>
                </p>
                <p className="flex items-center gap-2 mt-2">
                    <span className=" text-main-color"><BsCheckCircleFill /></span>
                    <span className=" text-gray-500">هذا النص هو مثال</span>
                </p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Experiens;
