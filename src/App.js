import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SingleItem from "./components/SingleItem";
import Cart from "./components/Cart";
import { connect } from "react-redux";

function App({ current }) {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {!current ? (
            <Route path="/item/:id" element={<Navigate to="/" />} />
          ) : (
            <Route path="/item/:id" element={<SingleItem />} />
          )}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
