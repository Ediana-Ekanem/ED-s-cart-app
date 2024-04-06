import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
// import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (item) => {
    // check if added or not
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleCount = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount == 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <>
      <Navbar size={cart.length} setShowModal={setShowModal} />
      <Home handleClick={handleClick} />

      {showModal && (
        <Modal
          cart={cart}
          setCart={setCart}
          setShowModal={setShowModal}
          handleCount={handleCount}
        />
      )}

      <div className="relative top-0 ">
        {warning && (
          <div className="bg-orange-500 text-white text-center p-4 rounded-lg shadow-md z-20 fixed font-bold top-0 right-0 w-96">
            <h1> Item is already added to your cart</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
