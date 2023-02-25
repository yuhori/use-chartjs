import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Scale = {
  y: {
    min: 0,
    max: 100,
    title: {
      display: true,
      text: "weight",
      color: "#FF4500",
      rotate: "vertical",
      font: {
        size: 20,
      },
    },
    ticks: {
      stepSize: 10,
    },
  },
  x: {
    title: {
      display: true,
      text: "month",
      color: "rgb(255,69,0)",
      font: {
        size: 20,
      },
    },
  },
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "graph",
    },
  },
  scales: Scale,
};

const labels = ["January", "February", "March"];
const data = {
  labels,
  datasets: [
    {
      label: "Aさん",
      data: [55, 50, 60],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "yellow",
    },
  ],
};

export const Weight = () => {
  return <Line options={options} data={data} />;
};
