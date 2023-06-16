import React, { useEffect } from 'react'
import './dashboard.css'
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useSelector } from 'react-redux';
export const Dashboard = () => {
  const { orders, products, loading, error } = useSelector(state => state.Seller)
  const totalOrders = orders ? orders.length : 0;
  let [pendingOrders, setPendingOrders] = useState(0)
  let [totalEarning, setTotalEarning] = useState(0)
  let [ordersInMonth, setOrdersInMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  let [earningInMonth, setEarningInMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])


  const [pieState, setPieState] = useState({
    series: [],
    options: {
      colors: ['#f4a424', '#14213d'],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Available Products', 'Out of Stock'],
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
        colors: ['#f4a424', '#14213d'],
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
      series:[]
    }

  )
  useEffect(() => {
    const orderData=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const earningData=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let outOfStockProduct = 0;
    let availableProducts = 0;
    if (orders) {
      orders.forEach((item) => {
        setTotalEarning(totalEarning += item.totalPrice)
        if (item.status === 'pending') {
          setPendingOrders(pendingOrders + 1);
        }
        const month = Number(item.createdAt.substring(5, 7)) - 1;
        const createdYear = Number(item.createdAt.substring(0, 4));
        const currentYear = new Date().getFullYear()
        if (currentYear === createdYear) {
          orderData[month]+=1;
          earningData[month]+=item.totalPrice;
          setOrdersInMonth((old) => {
            old[month] += 1;
            return [...old]
          })
          setEarningInMonth((old) => {
            old[month] += item.totalPrice;
            return [...old]
          })
        }
      })
    }
    setState((st)=>{
      st.series=[{
          name: "orders",
          data: orderData
        },
        {
          name: "earning",
          data: earningData
        }]
        return st;
    })
    if (products) {
      products.forEach((item) => {
        if (item.stock === 0) {
          outOfStockProduct += 1;
        }
      })
      availableProducts = products.length - outOfStockProduct;
    }
    setPieState((st)=>{
      st.series=[availableProducts, outOfStockProduct]
      return st;
    })
  }, [orders, products])
  return (
    <div className='dashboard'>
      <section className="dashboardTop">
        <div className="dashboardCards">
          <div>
            <h2>Total Earning</h2>
            <h2>₹{totalEarning}</h2>
          </div>
          <CurrencyRupeeIcon />
        </div>
        <div className="dashboardCards">
          <div>
            <h2>Total Orders</h2>
            <h2>{totalOrders}</h2>
          </div>
          <ListAltIcon />
        </div>
        <div className="dashboardCards">
          <div>
            <h2>Pending Orders</h2>
            <h2>{pendingOrders}</h2>
          </div>
          <PendingActionsIcon />
        </div>
      </section>
      <section className="dashboardBottom">
        <div className="chart1">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width={window.innerWidth > 1439 ? 1000 : window.innerWidth >= 1001 && window.innerWidth <= 1439 ? 800 : window.innerWidth >= 768 && window.innerWidth <= 1000 ? 600 : window.innerWidth >= 465 && window.innerWidth < 767 ? 500 : 400}
          />
        </div>
        <div className="chart2">
          <ReactApexChart options={pieState.options} series={pieState.series} type="pie" width={window.innerWidth >= 1440 ? 700 : window.innerWidth >= 1001 && window.innerWidth <= 1439 ? 650 : window.innerWidth >= 768 && window.innerWidth <= 1000 ? 500 : 400} />
        </div>
      </section>
    </div>
  )
}

// export Dashboard