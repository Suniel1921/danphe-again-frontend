// import React from 'react';
// import { Layout, Progress, Typography, Table } from 'antd';
// import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
// import '../clientDashboard/clientChart.css'

// const { Content } = Layout;
// const { Title } = Typography;

// const dataLineChart = [
//   { name: 'Jan', uv: 4000 },
//   { name: 'Feb', uv: 3000 },
//   { name: 'Mar', uv: 2000 },
//   { name: 'Apr', uv: 2780 },
//   { name: 'May', uv: 1890 },
//   { name: 'Jun', uv: 2390 },
//   { name: 'Jul', uv: 3490 },
// ];

// const dataBarChart = [
//   { name: 'A', uv: 300 },
//   { name: 'B', uv: 200 },
//   { name: 'C', uv: 100 },
//   { name: 'D', uv: 400 },
//   { name: 'E', uv: 300 },
//   { name: 'F', uv: 200 },
// ];

// const dataPieChart = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const ClientChart = () => {
//   const columns = [
//     { title: 'Documents', dataIndex: 'document', key: 'document' },
//     { title: 'Status', dataIndex: 'status', key: 'status' },
//   ];

//   const dataTable = [
//     { key: '1', document: 'Lorem ipsum', status: 'Verified' },
//     { key: '2', document: 'consectetur', status: 'Needs to update' },
//     { key: '3', document: 'adipiscing elit', status: 'Needs to update' },
//   ];

//   return (
//     <Layout>
//       <Content style={{ margin: '16px' }}>
//         <div className='client_Grid_Dashboard'>
//           <div className='client_charts box1'>
//             <Title level={4}>Total Order</Title>
//             <ResponsiveContainer width="100%" height={150}>
//               <LineChart data={dataLineChart}>
//                 <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="uv" stroke="#ff7300" dot={false} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//           <div className='client_charts box2'>
//             <Title level={4}>Progress</Title>
//             <ResponsiveContainer width="100%" height={150}>
//               <LineChart data={dataLineChart}>
//                 <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//           <div className='client_charts box3'>
//             <Title level={4}>Payments</Title>
//             <ResponsiveContainer width="100%" height={150}>
//               <BarChart data={dataBarChart}>
//                 <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//                 <Tooltip />
//                 <Bar dataKey="uv" fill="#ff7300" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <div className='client_charts box4'>
//             <Title level={4}>Total Progress of Work</Title>
//             <ResponsiveContainer width="100%" height={150}>
//               <PieChart>
//                 <Pie data={dataPieChart} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
//                   {dataPieChart.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <div className='client_charts box5'>
//             <Title level={4}>Documents</Title>
//             <Table columns={columns} dataSource={dataTable} pagination={false} />
//           </div>
//           <div className='client_charts box6'>
//             <Title level={4}>Remarks</Title>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className='client_charts box7'>
//             <Title level={4}>Total Percentage of Work</Title>
//             <Progress type="circle" percent={50} />
//           </div>
//           <div className='client_charts box8'>
//             <Title level={4}>Payments History</Title>
//             <ResponsiveContainer width="100%" height={150}>
//               <BarChart data={dataBarChart}>
//                 <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//                 <Tooltip />
//                 <Bar dataKey="uv" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </Content>
//     </Layout>
//   );
// }

// export default ClientChart;











import React from 'react';
import './clientChart.css';
import ClientOrder from './clientInfo/ClientOrder';
import ClientProgress from './clientInfo/ClientProgress';
import ClientPayments from './clientInfo/ClientPayments';
import TotalProgressWork from './clientInfo/TotalProgressWork';
import ClientDocumentStatus from './clientInfo/ClientDocumentStatus';
import Remarks from './clientInfo/Remarks';
import TotalPercentageOfWork from './clientInfo/TotalPercentageOfWork';
import PaymentHistory from './clientInfo/PaymentHistory';

const ClientChart = () => {
  return (
    <div className="clientChartContainer">
      <div className="client_Grid_Dashboard">
        <div className='client_charts box1'><ClientOrder /></div>
        <div className='client_charts box2'><ClientProgress /></div>
        <div className='client_charts box3'><ClientPayments /></div>
        <div className='client_charts box4'><TotalProgressWork /></div>
        <div className='client_charts box5'><ClientDocumentStatus /></div>
        <div className='client_charts box6'><PaymentHistory /></div>
        <div className='client_charts box7'><Remarks /></div>
        <div className='client_charts box8'><TotalPercentageOfWork /></div>
      </div>
    </div>
  );
}

export default ClientChart;
