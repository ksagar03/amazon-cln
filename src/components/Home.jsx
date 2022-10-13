import React from "react";
import "../css/Home.css";
import Products from "./Products";
import { useStateValue } from "./StateProvider";
const Home = () => {
  const [{Basket},]=useStateValue()
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
          id={1
          }
          title="Pendrive"
          price={2000}
          image="https://m.media-amazon.com/images/I/81gqM6ouEcL._SX679_.jpg"
          ratings={4}
        />
        <Products
          id={2}
          title="Apple iPhone 13 Pro (128 GB) - Alpine Green"
          price={"1,04,900"}
          image=" https://m.media-amazon.com/images/I/61AwGDDZd3L._SX679_.jpg"
          ratings={5}
        />
        <Products />

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
          price={"1,32,990"}
          image="https://m.media-amazon.com/images/I/71an9eiBxpL._SX679_.jpg"
          ratings={5}
        />
        <Products />

        {/*products*/}
      </div>
      <div className="home__blocks_in_rows">{/*products*/}</div>
    </div>
  );
};

export default Home;
