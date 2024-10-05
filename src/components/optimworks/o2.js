import React, { useContext } from "react";
import { OrderContext } from "../../App";

const OrderHistory = () => {
  const { orders } = useContext(OrderContext); // Access orders from context

  if (orders.length === 0) {
    return <p>No orders have been placed yet.</p>;
  }

  return (
    <div className="order-history-page">
      <h2>Order History</h2>
      <ul className="order-list">
        {orders.map((order, index) => (
          <li key={index} className="order-item">
            <p><strong>Table Number:</strong> {order.tableNumber}</p>
            <p><strong>Contact Number:</strong> {order.contactNumber || "N/A"}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Time:</strong> {order.time}</p>
            <h4>Ordered Items:</h4>
            <ul>
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
