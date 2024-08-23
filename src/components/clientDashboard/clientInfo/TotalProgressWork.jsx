import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const TotalProgressWork = () => {
  const [data, setData] = useState({
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        label: 'Progress Distribution',
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
        const orders = response.data;

        // Define the progress percentages for each status
        const progressMap = {
          verified: 100,
          processing: 50,
          pending: 20,
        };

        // Calculate the total progress based on order status
        const completed = orders.filter(order => order.status === 'verified').length;
        const inProgress = orders.filter(order => order.status === 'processing').length;
        const pending = orders.filter(order => order.status === 'pending').length;

        const totalOrders = orders.length;

        setData({
          labels: ['Completed', 'In Progress', 'Pending'],
          datasets: [
            {
              label: 'Progress Distribution',
              data: totalOrders > 0 ? [
                (completed / totalOrders * 100).toFixed(2), // Completed
                (inProgress / totalOrders * 100).toFixed(2), // In Progress
                (pending / totalOrders * 100).toFixed(2), // Pending
              ] : [0, 0, 0],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        setError('Error fetching orders');
        console.error('Error fetching orders', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="totalProgressWorkContainer">
      <div className="container">
        <h3>Total Progress Work</h3>
        <div style={{ width: '100%', height: '400px' }}> {/* Adjust height as needed */}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TotalProgressWork;







// import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
// import { Typography } from 'antd';

// const { Title } = Typography;

// const dataPieChart = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const TotalProgressWork = () => (
//   <>
//     <Title level={4}>Total Progress of Work</Title>
//     <ResponsiveContainer width="100%" height={150}>
//       <PieChart>
//         <Pie data={dataPieChart} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
//           {dataPieChart.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   </>
// );

// export default TotalProgressWork;
