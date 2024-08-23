// import React from 'react';
// import { Progress } from 'antd';
// import '../adminChart/adminChart.css';
// import Orders from '../orders/Orders';
// import PaymentChart from '../payment/PaymentChart';

// const AdminChart = () => {
//   return (
//     <>
//       <div className='admin_Grid_Dashboard'>
//         <div className='charts chartBox1'><Orders/></div>
//         <div className='charts chartBox2'>Progress</div>
//         <div className='charts chartBox3'><PaymentChart/></div>
//         <div className='charts chartBox4'>box4</div>
//         <div className='charts chartBox5'>box5</div>
//         <div className='charts chartBox6'>box6</div>
//         <div className='charts chartBox7'>
//             <h3>Total Percentage of Work</h3>
//           <Progress type="circle" percent={70} />
//         </div>
//         <div className='charts chartBox8'>box8</div>
//       </div>
//     </>
//   )
// }

// export default AdminChart;










import React from 'react';
import '../adminChart/adminChart.css';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const dataOrders = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Orders',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#36a2eb',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    },
  ],
};

const dataSales = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      fill: true,
    },
  ],
};

const dataVisits = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Visits',
      data: [85, 72, 78, 75, 77, 75, 70],
      borderColor: '#ff6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
  ],
};

const dataBounceRate = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Bounce Rate',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#ff9800',
      backgroundColor: 'rgba(255, 152, 0, 0.2)',
      fill: true,
    },
  ],
};

const AdminChart = () => {
  return (
    <div className="admin_Grid_container">
      <div className="charts chartBox1">
        <h3>Congratulations Danphe 🎉</h3>
        <p>You are the best seller of this month</p>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$168.5K</p>
        <p>58% of sales target</p>
        <button>View Details</button>
      </div>
      <div className="charts chartBox2">
        <h3>Total Orders</h3>
        <Line data={dataOrders} />
        <p>248k</p>
      </div>
      <div className="charts chartBox3">
        <h3>Total Sales</h3>
        <Line data={dataSales} />
        <p>$47.6k</p>
      </div>
      <div className="charts chartBox4">
        <h3>Total Visits</h3>
        <Line data={dataVisits} />
        <p>189k</p>
      </div>
      <div className="charts chartBox5">
        <h3>Bounce Rate</h3>
        <Bar data={dataBounceRate} />
        <p>24.6%</p>
      </div>
    </div>
  );
};

export default AdminChart;
