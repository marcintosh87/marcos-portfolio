"use strict";
// const headline = document.querySelector(".marcos");
// headline.textContent.toUpperCase();
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: [
      "HTML (6 years)",
      "CSS (6 years)",
      "Javascript (5 years)",
      "React.js (4 years)",
      "React-Native.js (2 years)",
      "Ruby on Rails (4 years)",
      "Ruby (4 years)",
    ],
    datasets: [
      {
        label: "Skills",
        data: [80, 70, 65, 75, 70, 68, 40, 100],
        backgroundColor: [
          "#D84924",
          "#0675AB",
          "#EE8F0F",
          "#0A9DC6",
          "#164C5E",
          "#C10101",
          "#ED3E3A",
        ],
        borderColor: [
          "#D84924",
          "#0675AB",
          "#EE8F0F",
          "#0A9DC6",
          "#164C5E",
          "#C10101",
          "#ED3E3A",
        ],
        borderWidth: 2,
        inflateAmount: 1,
        pointStyle: "star",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Current Technical Stack",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        display: false,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
      label: {
        render: "image",
        images: [
          {
            src: "https://cdn.jsdelivr.net/www.jsdelivr.com/9d08d41c6d3a827fa3f95a6a74e847bcd74bca98/img/logo-horizontal.svg",
            width: 16,
            height: 16,
          },
        ],
      },
    },

    indexAxis: "x",
  },
});
