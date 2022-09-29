import React from 'react'
import "../css/Home.css"
import Products from './Products'
const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="" />
        </div>
      <div className='home__blocks_in_rows'>
        <Products title="Pendrive" price={2000} image="https://m.media-amazon.com/images/I/81gqM6ouEcL._SX679_.jpg" ratings={4} />
        <Products title="Apple iPhone 13 Pro (128 GB) - Alpine Green" 
          price={"1,04,900"} 
          image=" https://m.media-amazon.com/images/I/61AwGDDZd3L._SX679_.jpg"
          ratings={5} />
        <Products />
                 <Products />
        {/*products*/}
      </div>
       <div className='home__blocks_in_rows'>
                 <Products />
                 <Products />
                 <Products />

  
         {/*products*/}
      </div>
       <div className='home__blocks_in_rows'>
           {/*products*/}
      </div> 
       
    </div>
  )
}

export default Home
