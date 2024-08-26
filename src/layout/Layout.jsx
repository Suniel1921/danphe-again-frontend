// import React from 'react';
// import Navbar from '../pages/navbar/Navbar';
// import Footer from '../pages/footer/Footer';
// import { Outlet } from 'react-router-dom';
// import '../layout/layout.css';
// import Banner from '../components/topBanner/Banner';

// const Layout = () => {
//   return (
//     <>
//       <div className="layoutContainer">
//         <Banner/>
//         <Navbar />
//         <div className="mainContent">
//           <Outlet />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Layout;





import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../pages/navbar/Navbar';
// import Footer from '../pages/footer/Footer';
import { Outlet } from 'react-router-dom';
import '../layout/layout.css';
import Banner from '../components/topBanner/Banner';
import OrderProgress from '../pages/contact/OrderProgress';
import Footer from '../pages/footer/Footer';

const Layout = () => {
  const location = useLocation();

  const showOrderProgress = [
    /^\/quote-pricing$/,
    /^\/package-selection\/[^/]+$/,
    // /^\/cart$/,
    /^\/contact-info$/,
    /^\/company-info$/,
    /^\/checkout$/
  ].some(pattern => pattern.test(location.pathname));

  return (
    <>
      <div className="layoutContainer">
        {/* <Banner /> */}
        <Navbar />
       <div className="container">
      <div className='orderProgressContainer'>
      {showOrderProgress && <OrderProgress />}
      </div>
       </div>
        <div className="mainContent">
          <Outlet />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
