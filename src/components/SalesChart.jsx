import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SalesChart = ({ orders }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!orders || orders.length === 0) return;

    // Destroy existing chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Filter orders for the last four months
    const currentDate = new Date();
    const lastFourMonthsOrders = orders.filter(order => {
      const orderDate = new Date(order.orderdate);
      return (
        orderDate >= new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1) && 
        orderDate <= currentDate
      );
    });

    // Aggregate sales data for each month
    const monthlySalesData = {};
    orders.forEach(order => {
      const date = new Date(order.orderdate);
      const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      if (!monthlySalesData[month]) {
        monthlySalesData[month] = order.amount;
      } else {
        monthlySalesData[month] += order.amount;
      }
    });

    const sortedMonthlySalesData = Object.entries(monthlySalesData)
      .sort(([month1], [month2]) => new Date(month1) - new Date(month2));

    const labels = sortedMonthlySalesData.map(([month]) => month);
    const data = sortedMonthlySalesData.map(([, amount]) => amount);


    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Monthly Sales',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [orders]);

  return <canvas ref={chartRef} />;
};

export default SalesChart;
