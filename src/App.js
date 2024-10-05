import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Modal from "./components/optimworks/o4";
import Menu from "./components/optimworks/o1";
import OrderHistory from "./components/optimworks/o2";
import Cart from "./components/optimworks/o3";

export const OrderContext = createContext();

const App = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      <Router>
        <div className="app">
          <h1 className="app-title">ZestZing</h1>
          <button onClick={toggleModal}>View Cart</button> {/* Button to open the cart */}
          <Modal isOpen={isModalOpen} onClose={toggleModal}>
            <Cart /> {/* Display the Cart component in the modal */}
          </Modal>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
        </div>
      </Router>
    </OrderContext.Provider>
  );
};

export default App;
