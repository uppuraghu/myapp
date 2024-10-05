import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { OrderContext } from "../../App"; // Adjust the import based on your file structure

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const { orders, setOrders } = useContext(OrderContext);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968")
      .then((response) => {
        const dishes = response.data.record;
        setMenuItems(dishes);
      })
      .catch((error) => {
        console.error("Error fetching dishes:", error);
      });
  }, []);

  const addToOrder = (dish) => {
    if (dish.available_quantity > 0) {
      const newOrder = { 
        ...dish, 
        quantity: 1,
        date: new Date().toLocaleDateString() 
      };

      setOrders((prevOrders) => {
        const existingOrder = prevOrders.find(order => order.id === dish.id);
        if (existingOrder) {
          return prevOrders.map(order => 
            order.id === dish.id
              ? { ...order, quantity: order.quantity + 1 }
              : order
          );
        }
        return [...prevOrders, newOrder];
      });

      // Update available quantity in menu
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === dish.id
            ? { ...item, available_quantity: item.available_quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromOrder = (dish) => {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find(order => order.id === dish.id);
      if (existingOrder && existingOrder.quantity > 1) {
        return prevOrders.map(order =>
          order.id === dish.id
            ? { ...order, quantity: order.quantity - 1 }
            : order
        );
      }
      return prevOrders.filter(order => order.id !== dish.id);
    });

    // Update available quantity in menu
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === dish.id
          ? { ...item, available_quantity: item.available_quantity + 1 }
          : item
      )
    );
  };

  return (
    <div className="menu-page">
      <h2 className="menu-heading">Menu</h2>
      {menuItems.length === 0 ? (
        <p className="loading">Loading menu...</p>
      ) : (
        <ul className="menu-list">
          {menuItems.map((dish) => (
           <li key={dish.id} className="menu-item">
            <span className="menu-dish-id"> {dish.id}</span>
           <img src={dish.image_url} alt={dish.name} className="menu-dish-image" />
           <span className="menu-dish-name">{dish.name}</span>
           <span className="menu-dish-category">{dish.category}</span>
           <span className="menu-dish-price">${dish.price}</span>
           <span className="menu-dish-quantity">
             {dish.available_quantity > 0
               ? `In Stock (${dish.available_quantity})`
               : "Out of Stock"}
           </span>
           <button
             className="add-to-order-btn"
             onClick={() => addToOrder(dish)}
             disabled={dish.available_quantity === 0}
           >
             Add to Order
           </button>
           <button
             className="remove-from-order-btn"
             onClick={() => removeFromOrder(dish)}
             disabled={orders.find(order => order.id === dish.id) == null}
           >
             Remove 
           </button>
         </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
