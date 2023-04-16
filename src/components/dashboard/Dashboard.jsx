import React from 'react'
import './dashboard.css'
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
export const Dashboard = () => {
  const [pieState, setPieState] = useState({
    series: [44, 55],
    options: {
      colors: ['#f4a424', '#f5f5f5'],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['available products', 'out of stock products'],
      // labels:{
      //   show: false
      // },
      dataLabels: {
        offset: 0,
        minAngleToShowLabel: 10
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'bottom'
      }
    },

  })
  const [state, setState] = useState(
    {
      options: {
        colors: ['#f4a424', '#9C27B0'],
        chart: {
          id: "chart",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
              customIcons: []
            },
          },
        },
        xaxis: {
          type: 'string',
          tickPlacement: 'on',
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          range: 11,
          max: 12,
          floating: false,
          min: 0,
        },
        stroke: {
          width: 2
        },
      },
      series: [
        {
          name: "orders",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 22, 33, 11, 22]
        },
        {
          name: "earning",
          data: [300, 403, 451, 502, 429, 620, 730, 931, 444, 333, 444, 333]
        }
      ],
    }

  )
  return (
    <div className='dashboard'>
      <section className="dashboardTop">
        <div className="dashboardCards">
          <CurrencyRupeeIcon />
        </div>
        <div className="dashboardCards">
          <ListAltIcon />
        </div>
        <div className="dashboardCards">
          <PendingActionsIcon />
        </div>
      </section>
      <section className="dashboardBottom">
        <div className="chart1">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width={window.innerWidth > 1439 ? 1000 : window.innerWidth >= 1001 && window.innerWidth <= 1439 ? 800 : window.innerWidth >= 768 && window.innerWidth <= 1000 ? 600 :window.innerWidth>=465&&window.innerWidth<767?500:400}
          />
        </div>
        <div className="chart2">
          <ReactApexChart options={pieState.options} series={pieState.series} type="pie" width={window.innerWidth >= 1440 ? 700 : window.innerWidth >= 1001 && window.innerWidth <= 1439 ? 650 : window.innerWidth >= 768 && window.innerWidth <= 1000 ? 500 :400}/>
        </div>
      </section>
    </div>
  )
}

// export Dashboard