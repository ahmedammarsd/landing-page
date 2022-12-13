import React , { useState } from 'react';
import { Chart as ChartJS , BarElement , CategoryScale , LinearScale , Tooltip , Legend } from "chart.js/auto"
import { Bar } from 'react-chartjs-2';
import { mainContainer , dataBar } from '../data/data';


ChartJS.register(
    BarElement , CategoryScale , LinearScale , Tooltip , Legend
)
const Charts = () => {
//     const [usersData , setUserData] = useState({
//         lables: ['Jan' , 'jan', 'jan', 'jan', 'jan'], 
//         datasets: [{
//           lable : "Month Product",
//           data :[3,5,73,3,900],
//           backgroundColor : ["blue"]
//     }],
//   })
  return (
    <div className={mainContainer}>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-9 mt-3 py-4 items-center">
        <div className="p-5 shadow-md hover:shadow-lg rounded-lg w-full h-full mt-7">
          <Bar type={"bar"}  data={{
            // Name of the variables on x-axies for each bar
            labels: dataBar.map( (data) => data.month),
            datasets: [
              {
                // Label for bars
                fill: true,
                label: "مثال نص" , 
                // Data or value of your each variable
                data: dataBar.map( (data) => data.P1),
                // Color of each bar
                backgroundColor: ["#4D46C7"],
                // Border color of each bar
                borderColor: ["#4D46C7"],
                borderWidth: 0.5,
                borderRadius: 5,
              },
              {
                // Label for bars
                fill: true,
                label: "مثال نص" , 
                // Data or value of your each variable
                data: dataBar.map( (data) => data.P2),
                // Color of each bar
                backgroundColor: ["#FAB33F"],
                // Border color of each bar
                borderColor: ["#FAB33F"],
                borderWidth: 0.5,
                borderRadius: 5,
              },
             
            ],
          }}  options={{
            responsive: true,
            scales: {
                y: {
                    grid : {
                        display: false
                    },
                },
                x : {
                    grid : {
                        display: false
                    },
                }
            }
          }} />
          </div>
          <div>
            <h2 className="text-xl lg:text-5xl md:text-3xl sm:text-xl text-main-color mt-15 mt-16 p-2 mb-4">هذا النص هو مثال لنص</h2>
            <p className="text-sm lg:text-xl md:text-sm text-gray-500 p-2 my-4">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، </p>
            <button className="p-4 px-7 bg-main-color text-white rounded-lg hover:bg-blue-700 transition-all duration-500 ease-in-out">
            تواصل معنا
          </button>
          </div>

          </div>
    </div>
  )
}

export default Charts