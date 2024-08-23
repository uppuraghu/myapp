import React from 'react';

const Cart = ({ cartItems, onDelete }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name.common}</h3>
            <button onClick={() => onDelete(item)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

