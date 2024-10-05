import React, { useState } from 'react';

const OrderModal = ({ isOpen, onClose, onSubmit }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [date] = useState(new Date().toLocaleDateString());
  const [time] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      tableNumber,
      contactNumber,
      date,
      time,
    };
    onSubmit(orderDetails); // Call the onSubmit function passed as a prop
    onClose(); // Close the modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className="order-modal-overlay">
      <div className="order-modal-content">
        <button className="order-modal-close-btn" onClick={onClose}>×</button>
        <h1 className="order-modal-heading">Place Your Order</h1>
        <form onSubmit={handleSubmit} className="order-modal-form">
          <div className="order-modal-form-group">
            <label className="order-modal-label">Table Number:</label>
            <input
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="order-modal-input"
              required
              placeholder="Enter table number"
            />
          </div>
          <div className="order-modal-form-group">
            <label className="order-modal-label">Contact Number (Optional):</label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="order-modal-input"
              placeholder="Enter contact number"
            />
          </div>
          <div className="order-modal-form-group">
            <label className="order-modal-label">Date:</label>
            <input type="text" value={date} className="order-modal-input" readOnly />
          </div>
          <div className="order-modal-form-group">
            <label className="order-modal-label">Time:</label>
            <input type="text" value={time} className="order-modal-input" readOnly />
          </div>
          <button type="submit" className="order-modal-submit-btn">Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
