import React from "react";
import "../css/Home.css";
import Products from "./Products";
import { useStateValue } from "./StateProvider";
const Home = () => {
  const [{ Basket }] = useStateValue();
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
          title="Pendrive"
          price={2000}
          image="https://m.media-amazon.com/images/I/81gqM6ouEcL._SX679_.jpg"
          ratings={4}
        />
        <Products
          id={2}
          title="Apple iPhone 13 Pro (128 GB) - Alpine Green"
          price={104900}
          image=" https://m.media-amazon.com/images/I/61AwGDDZd3L._SX679_.jpg"
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
          price={132990}
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
      <div className="home__blocks_in_rows">{/*products*/}</div>
    </div>
  );
};

export default Home;
