import { Component } from "react";
import withSidebar from "@/components/HOC/withSidebar";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

class Statistics extends Component {
  render() {
    const eventsData = {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Job Fair Registrations",
          data: [150, 180, 200, 220, 210, 230],
          fill: false,
          borderColor: "#285D7C",
          tension: 0.1,
        },
        {
          label: "Research Day Registrations",
          data: [100, 120, 130, 140, 150, 160],
          fill: false,
          borderColor: "#cc3838",
          tension: 0.1,
        },
        {
          label: "Orientation Day Registrations",
          data: [80, 90, 110, 100, 120, 130],
          fill: false,
          borderColor: "#f59e0b",
          tension: 0.1,
        },
      ],
    };

    // Line Data for Users Over Time
    const userStatsData = {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Users",
          data: [1000, 1200, 1500, 1700, 1900, 2100],
          fill: false,
          borderColor: "#4CAF50",
          tension: 0.1,
        },
      ],
    };

    // Bar Data for Current Number of Users, Professors, and Admins
    const currentStatsData = {
      labels: ["Users", "Professors", "Admins"],
      datasets: [
        {
          label: "Count",
          data: [2100, 85, 20],
          backgroundColor: ["#4CAF50", "#cc3838", "#f59e0b"],
          borderWidth: 1,
        },
      ],
    };

    const barData = {
      labels: ["Job Fair", "Research Day", "Orientation Day"],
      datasets: [
        {
          label: "Event Attendance",
          data: [300, 250, 400],
          backgroundColor: ["#cc3838", "#285D7C", "#f59e0b"],
          borderWidth: 1,
        },
      ],
    };

    const doughnutData = {
      labels: ["Positive", "Neutral", "Negative"],
      datasets: [
        {
          label: "Feedback",
          data: [60, 30, 10],
          backgroundColor: ["#4CAF50", "#FFEB3B", "#F44336"],
          hoverOffset: 4,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    };

    return (
      <div className="relative">
        <div className="absolute bg-white w-full h-fit pb-6 z-40 transition-all duration-800 ease-in-out">
          <div className="flex justify-between w-[98%]">
            <p className="text-[26px] font-bold">TCCD Event Statistics</p>
          </div>

          {/* Event Registrations */}
          <p className="font-semibold text-2xl mb-3 border-b border-black">
            Event Registrations (Yearly)
          </p>
          <div className="w-full lg:w-1/2 mx-auto">
            <Line data={eventsData} options={options} />
          </div>

          {/* Event Attendance Comparison */}
          <div className="flex flex-col gap-4 mt-4 select-none">
            <p className="font-semibold text-2xl mb-3 border-b border-black mt-8">
              Event Attendance Comparison
            </p>
            <div className="w-full lg:w-1/2 mx-auto">
              <Bar data={barData} options={options} />
            </div>

            {/* Feedback Overview */}
            <p className="font-semibold text-2xl mb-3 border-b border-black mt-8">
              Feedback Overview
            </p>
            <div className="w-full lg:w-1/2 mx-auto">
              <Doughnut data={doughnutData} options={options} />
            </div>

            {/* Users over Time */}
            <p className="font-semibold text-2xl mb-3 border-b border-black mt-8">
              Users (Yearly)
            </p>
            <div className="w-full lg:w-1/2 mx-auto">
              <Line data={userStatsData} options={options} />
            </div>

            {/* Current Statistics */}
            <p className="font-semibold text-2xl mb-3 border-b border-black mt-8">
              Current Number of Users, Professors, and Admins
            </p>
            <div className="text-center flex justify-around font-bold text-xl">
              <div>
                <p>Users</p>
                <p className="text-3xl">
                  {currentStatsData.datasets[0].data[0]}
                </p>
              </div>
              <div>
                <p>Professors</p>
                <p className="text-3xl">
                  {currentStatsData.datasets[0].data[1]}
                </p>
              </div>
              <div>
                <p>Admins</p>
                <p className="text-3xl">
                  {currentStatsData.datasets[0].data[2]}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mx-auto mt-4">
              <Bar data={currentStatsData} options={options} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withSidebar(Statistics);
