import React from 'react';

const OrderConfirmationModal = ({ isOpen, onClose, orderDetails }) => {
  if (!isOpen || !orderDetails) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Order Confirmation</h2>
        <p><strong>Table Number:</strong> {orderDetails.tableNumber}</p>
        <p><strong>Contact Number:</strong> {orderDetails.contactNumber || "N/A"}</p>
        <p><strong>Date:</strong> {orderDetails.date}</p>
        <p><strong>Time:</strong> {orderDetails.time}</p>
        <h3>Ordered Items:</h3>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
