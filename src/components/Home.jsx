import React from "react";
import "../css/Home.css";
import Products from "./Products";
// import { useStateValue } from "./StateProvider";
const Home = () => {
  // const [{ Basket }] = useStateValue();
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__blocks_in_rows">
        <Products
          id={1}
          title="SanDisk Ultra Dual Drive Go 256GB USB Type C Pendrive for Mobile (5Y - SDDDC3-256G-I35, Black)"
          price={2000}
          image="https://m.media-amazon.com/images/I/81gqM6ouEcL._SX679_.jpg"
          ratings={3}
        />
        <Products
          id={2}
          title="Acer XZ306CX 29.5 Inch Ultrawide 21:9 1500R Curve 2560 X 1080 Monitor I 1 MS VRB I 200 Hz Refresh Rate I HDR 400 I DCI-P3 93% I AMD Free Sync I 2XHDMI 1XDP I Stereo Speakers I Eye Care Features, White"
          price={21999}
          image="https://m.media-amazon.com/images/I/71sBDiA+O3L._SX679_.jpg"
          ratings={5}
        />
        {/*products*/}
      </div>
      <div className="home__blocks_in_rows">
        <Products
          id={3}
          title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
          price={500}
          image="https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
          ratings={4}
        />
        <Products
          id={4}
          title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey "
          price={132990.5}
          image="https://m.media-amazon.com/images/I/71an9eiBxpL._SX679_.jpg"
          ratings={5}
        />
        <Products
          id={5}
          title="Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Acoustic Red)"
          price={1699}
          image="https://m.media-amazon.com/images/I/31RwE3ltrQL._SX300_SY300_QL70_FMwebp_.jpg"
          ratings={4}
        />
        {/*products*/}
      </div>
      <div className="home__blocks_in_rows">
        <Products
          id={6}
          title="Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Starlight Alpine Loop - Small"
          price={89899.5}
          image="https://m.media-amazon.com/images/I/91v9yAPw3-L._SX679_.jpg"
          ratings={4}
        />
        <Products
          id={7}
          title="Cooler Master MasterBox TD500 Mesh Triple ARGB Full Tower Gaming Cabinet with Dual 360mm Radiator Support and Crystalline Tempered Glass (White)"
          price={8999}
          image="https://m.media-amazon.com/images/I/81nRifUlMEL._SX679_.jpg"
          ratings={4}
        />
        <Products
          id={7}
          title="FitBox Sports Intruder 20 Kg Adjustable Dumbbells Weights With Dumbbells Rods For Home Gym & Strength Training, 10 Kg X 2 (Black)"
          price={899}
          image="https://m.media-amazon.com/images/I/517FvNN-33L._SX679_.jpg"
          ratings={4}
        />
      </div>
    </div>
  );
};

export default Home;

// <Products
//           id={2}
//           title="Apple iPhone 13 Pro (128 GB) - Alpine Green"
//           price={104900.99}
//           image=" https://m.media-amazon.com/images/I/61AwGDDZd3L._SX679_.jpg"
//           ratings={5}
//         />
