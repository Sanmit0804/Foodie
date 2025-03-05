import React, { useContext, useState, useEffect } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  // Function to handle showing more items
  const handleShowMore = () => {
    setShowItemCount((prev) => prev + 4);
  };

  useEffect(() => {
    // Simulate fetching data from backend and remove loading once data is available
    if (food_list.length > 0) {
      setLoading(false);
    }
  }, [food_list]);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you!</h2>
      {loading ? (
        <div className="loading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle fill="#FF6347" stroke="#FF6347" strokeWidth="13" r="15" cx="40" cy="100">
              <animate attributeName="opacity" calcMode="spline" dur="1.3s" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4s"></animate>
            </circle>
            <circle fill="#FF6347" stroke="#FF6347" strokeWidth="13" r="15" cx="100" cy="100">
              <animate attributeName="opacity" calcMode="spline" dur="1.3s" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2s"></animate>
            </circle>
            <circle fill="#FF6347" stroke="#FF6347" strokeWidth="13" r="15" cx="160" cy="100">
              <animate attributeName="opacity" calcMode="spline" dur="1.3s" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0s"></animate>
            </circle>
          </svg>
          Please wait... It may take a few minutes.
        </div>
      ) : (
        <div className="food-display-list">

          {food_list.length > 0 ? (
            food_list.some(item => category === "All" || category === item.category) ? (
              food_list.map((item, index) => (
                (category === "All" || category === item.category) ? (
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                ) : null
              ))
            ) : (
              <p>No items available in {category}</p>
            )
          ) : (
            <p>No items available</p>
          )}

        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
