import React, { useContext, useState } from "react";
import { OrderContext } from "../../App"; // Navigate up two directories to reach App.js
import OrderModal from "./o5";

const Cart = () => {
  const { orders } = useContext(OrderContext); // Access orders from context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const totalPrice = orders.reduce((total, order) => total + (order.price * order.quantity), 0);

  const handleCheckout = (details) => {
    const submittedOrder = {
      ...details,
      items: orders, // Include the ordered items
    };
    
    setOrderDetails(submittedOrder);
    setIsConfirmationOpen(true); // Open the confirmation modal
    setIsModalOpen(false); // Close the order details modal
    console.log('Order Details:', submittedOrder); // Log the submitted order details
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {orders.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {orders.map((order, index) => (
            <li key={index} className="cart-item">
              <span className="cart-dish-name">{order.name}</span>
              <span className="cart-dish-price">${order.price}</span>
              <span className="cart-dish-quantity">Quantity: {order.quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="total-price">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
      <div className="checkout-button">
        <button onClick={() => setIsModalOpen(true)}>Checkout</button>
      </div>
      
      {/* Modal for placing order details */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleCheckout} 
      />
      
      {/* Confirmation modal for the submitted order */}
      {isConfirmationOpen && (
        <div className="order-confirmation">
          <h3>Order Placed Successfully!</h3>
          <p><strong>Table Number:</strong> {orderDetails.tableNumber}</p>
          <p><strong>Contact Number:</strong> {orderDetails.contactNumber || "N/A"}</p>
          <p><strong>Date:</strong> {orderDetails.date}</p>
          <p><strong>Time:</strong> {orderDetails.time}</p>
          <h4>Ordered Items:</h4>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <button onClick={() => setIsConfirmationOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
