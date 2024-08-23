// import React, { useState } from 'react';
// import '../sideMenu/sideMenu.css';
// import { IoMdArrowDropright } from "react-icons/io";
// import { Link } from 'react-router-dom';

// const SideMenu = () => {
//   const [dropdowns, setDropdowns] = useState({
//     ecommerce: false,
//     package: false,
//   });

//   const toggleDropdown = (name) => {
//     setDropdowns((prevState) => ({
//       ...prevState,
//       [name]: !prevState[name],
//     }));
//   };

//   return (
//     <div className="sideMenu">
//       <Link className='link' to={'/dashboard/admin'}>
//         <h3 className='adminHeading'>Admin Dashboard</h3>
//       </Link>

//       <div className="dropdownContainer">
//         <h4 onClick={() => toggleDropdown('ecommerce')}>
//           <IoMdArrowDropright className={`icon ${dropdowns.ecommerce ? 'rotate' : ''}`} />
//           <h3 className="dropdownTitle">Testing Heading</h3>
//         </h4>
//         <div className={`dropdownContent ${dropdowns.ecommerce ? 'open' : ''}`}>
//           <Link className='link' to={'/dashboard/admin/manage-orders'}>
//             <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Manage Orders</p>
//           </Link>
//           <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test2</p>
//           <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test3</p>
//           <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test4</p>
//           <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test5</p>
//         </div>
//       </div>

//       <div className="dropdownContainer">
//         <h4 onClick={() => toggleDropdown('package')}>
//           <IoMdArrowDropright className={`icon ${dropdowns.package ? 'rotate' : ''}`} />
//           <h3 className="dropdownTitle">Manage Package</h3>
//         </h4>
//         <div className={`dropdownContent ${dropdowns.package ? 'open' : ''}`}>
//           <Link className='link' to='/dashboard/admin/createPackage'>
//             <p className="subItemLink sideMenuChildHeading">
//               <IoMdArrowDropright className="subItemIcon" /> Add Package
//             </p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideMenu;






import React, { useState } from 'react';
import '../sideMenu/sideMenu.css';
import { IoMdArrowDropright } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const SideMenu = () => {
  const [dropdowns, setDropdowns] = useState({
    ecommerce: false,
    package: false,
  });

  const location = useLocation(); // To get the current route

  const toggleDropdown = (name) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="sideMenu">
      <Link className={`link ${location.pathname === '/dashboard/admin' ? 'active' : ''}`} to={'/dashboard/admin'}>
        <h3 className='adminHeading'>Admin Dashboard</h3>
      </Link>

      <div className="dropdownContainer">
        <h4 
          onClick={() => toggleDropdown('ecommerce')} 
          className={`dropdownHeader ${dropdowns.ecommerce ? 'active' : ''}`}
        >
          <IoMdArrowDropright className={`icon ${dropdowns.ecommerce ? 'rotate' : ''}`} />
          <h3 className="dropdownTitle">Testing Heading</h3>
        </h4>
        <div className={`dropdownContent ${dropdowns.ecommerce ? 'open' : ''}`}>
          <Link className={`link ${location.pathname === '/dashboard/admin/manage-orders' ? 'active' : ''}`} to={'/dashboard/admin/manage-orders'}>
            <p className='sideMenuChildHeading'>
              <IoMdArrowDropright className="subItemIcon" /> Manage Orders
            </p>
          </Link>
          <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test2</p>
          <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test3</p>
          <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test4</p>
          <p className='sideMenuChildHeading'><IoMdArrowDropright className="subItemIcon" /> Test5</p>
        </div>
      </div>

      <div className="dropdownContainer">
        <h4 
          onClick={() => toggleDropdown('package')} 
          className={`dropdownHeader ${dropdowns.package ? 'active' : ''}`}
        >
          <IoMdArrowDropright className={`icon ${dropdowns.package ? 'rotate' : ''}`} />
          <h3 className="dropdownTitle">Manage Package</h3>
        </h4>
        <div className={`dropdownContent ${dropdowns.package ? 'open' : ''}`}>
          <Link className={`link ${location.pathname === '/dashboard/admin/createPackage' ? 'active' : ''}`} to='/dashboard/admin/createPackage'>
            <p className="subItemLink sideMenuChildHeading">
              <IoMdArrowDropright className="subItemIcon" /> Add Package
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
