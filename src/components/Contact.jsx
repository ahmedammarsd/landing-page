import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { BsInstagram } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
import { RxGrid } from "react-icons/rx";
import { mainContainer, gridColms , mainTitle ,buttons , chartDou , spaceBetween , twoIcones , pragraph ,dataDougtnuts } from "../data/data";

ChartJS.register(ArcElement, Tooltip, Legend);
const Contact = () => {
  return (
    <div className={mainContainer}>
      <div className={gridColms}>
        <div className="flex flex-col justify-start items-start">
          <h2 className={mainTitle}>
            هذا النص هو مثال لنص
          </h2>
          <div>
            <p className={pragraph}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
               تم توليد هذا النص من مولد النص العربى، حيث يمكنك
              أن تولد مثل هذا النص..
            </p>
            <p className={pragraph}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،{" "}
            </p>
          </div>
          <button className={buttons}>
            تواصل معنا
          </button>
        </div>

        <div className="relative p-20">
          <div className="image">
            <img src="../images/image.png" className="" />
          </div>

          <div className={chartDou}>
            <div className={`${spaceBetween} gap-14`} >
              <div className={`${spaceBetween} gap-2`}>
                <BsInstagram className=" text-main-color" />
                <h3 className=" text-sm font-semibold text-main-color w-20">نوع الوسائط</h3>
              </div>
              <div className={`${spaceBetween} gap-1`}>
                <span className={twoIcones}>
                  <RxDownload />
                </span>
                <span className={twoIcones}>
                  <RxGrid />
                </span>
              </div>
            </div>
            <div className="w-[80%] h-[80%] flex items-center mt-2">
            <Doughnut data={dataDougtnuts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
