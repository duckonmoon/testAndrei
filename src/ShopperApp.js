import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopperApp = () => (
  <div className="shopper-app">
    <Header />
    <div style={{
      marginTop: "60px",
      marginBottom: "50px"
    }}>
      <Content/>
    </div>
    <Footer/>
  </div>
);

export default ShopperApp;

