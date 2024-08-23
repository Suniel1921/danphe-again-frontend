// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import { useCartGlobally } from "../../contexts/cartContext";
// import "./package.css";

// const Package = () => {
//   const { id } = useParams();
//   const [singlePackage, setSinglePackage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { addToCart } = useCartGlobally();
//   const navigate = useNavigate();

//   const getsinglePrice = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getSinglePackage/${id}`
//       );
//       console.log(response.data); // Log the response data
//       if (response.data.success) {
//         setSinglePackage(response.data.singlePackage);
//       } else {
//         setError("No data found.");
//       }
//     } catch (error) {
//       console.error("Error details:", error); // Log the complete error
//       if (error.response) {
//         setError(`Error: ${error.response.status} - ${error.response.statusText}`);
//       } else {
//         setError("Something went wrong");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getsinglePrice();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!singlePackage) {
//     return <p>No Package Found...</p>;
//   }

//   const handleAddToCart = (index) => {
//     const product = {
//       _id: `${id}-${index}`, // Unique ID for each variant
//       heading: singlePackage.cartHeading[index],
//       price: singlePackage.cartPrice[index],
//       list: singlePackage[`cartList${index}`],
//     };
//     addToCart(product);
//     toast.success('Item added to cart');
//     navigate('/cart')
//   };

//   const renderPackageCard = (index) => {
//     return (
//       <div className="packageChildCard" key={index}>
//         <div className="packageHeadingData">
//           <div className="packageContent">
//             <h3>{singlePackage.cartHeading[index]}</h3>
//             <p className="packagecartPrice">${singlePackage.cartPrice[index]}</p>
//             <p>plus $366 state fee</p>
//             <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
//           </div>
//         </div>
//         <ul className="packageListContent">
//           {singlePackage[`cartList${index}`].map((item, idx) => (
//             <li className="cartListData" key={idx}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div className="packageSelectionContainer">
//       <div className="container">
//         <div className="packageHeading">
//           <h3>Select a Package for Your California Limited Liability Company</h3>
//           <p>We offer 3 flavors of packages that range from laying the foundation to building the whole house.</p>
//         </div>
//         <div className="packageCard">
//           {renderPackageCard(0)}
//           {renderPackageCard(1)}
//           {renderPackageCard(2)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Package;










import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCartGlobally } from "../../contexts/cartContext";
import "./package.css";

const Package = () => {
  const { id } = useParams();
  const [singlePackage, setSinglePackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCartGlobally();
  const navigate = useNavigate();

  // Fetch package data from the server
  const getsinglePrice = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/getSinglePackage/${id}`
      );
      if (response.data.success) {
        setSinglePackage(response.data.singlePackage);
      } else {
        setError("No data found.");
      }
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.status} - ${error.response.statusText}`);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch package data on component mount or when the ID changes
  useEffect(() => {
    getsinglePrice();
  }, [id]);

  // Loading, error, and no package found states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!singlePackage) return <p>No Package Found...</p>;

  // Handle adding the package to the cart
  const handleAddToCart = (index) => {
    const product = {
      _id: `${id}-${index}`, // Unique ID for each variant
      heading: singlePackage.cartHeading[index],
      price: singlePackage.cartPrice[index],
      list: singlePackage[`cartList${index}`],
    };
    addToCart(product);
    toast.success('Item added to cart');
    navigate('/cart');
  };

  // Render individual package card
  const renderPackageCard = (index) => (
    <div className="packageChildCard" key={index}>
      <div className="packageHeadingData">
        <div className="packageContent">
          <h3>{singlePackage.cartHeading[index]}</h3>
          <p className="packagecartPrice">${singlePackage.cartPrice[index]}</p>
          <p>plus $366 state fee</p>
          <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
        </div>
      </div>
      <ul className="packageListContent">
        {singlePackage[`cartList${index}`].map((item, idx) => (
          <li className="cartListData" key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="packageSelectionContainer">
      <div className="container">
        <div className="packageHeading">
          <h3>Select a Package for Your California Limited Liability Company</h3>
          <p>We offer 3 flavors of packages that range from laying the foundation to building the whole house.</p>
        </div>
        <div className="packageCard">
          {renderPackageCard(0)}
          {renderPackageCard(1)}
          {renderPackageCard(2)}
        </div>
      </div>
    </div>
  );
};

export default Package;
