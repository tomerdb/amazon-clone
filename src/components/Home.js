import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product id='1' title='Alienware 15 R4 AW15R4-15.6" FHD - i7-8750H - NVIDIA GTX 1070-16GB - 1TB HDD+256GB SSD' price={1399.99} image="https://images-na.ssl-images-amazon.com/images/I/71HikGN%2BY%2BL._AC_SX522_.jpg" rating={4}/>
          <Product id='2' title='Apple AirPods Pro' price={249.99} image="https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SX522_.jpg" rating={5}/>
        </div>
        <div className="home__row">
          <Product id='3' title='Samsung Electronics Galaxy Note 20 5G Factory Unlocked Android Cell Phone | US Version | 128GB of Storage | Mobile Gaming Smartphone | Long-Lasting Battery | Mystic Bronze (SM-N981UZNAXAA)' image="https://images-na.ssl-images-amazon.com/images/I/81AczAgBE1L._AC_SX679_.jpg" price={799.99} rating={5}/>
          <Product id='4' title='Apple Watch Series 5 GPS' price={368.97} image="https://images-na.ssl-images-amazon.com/images/I/71d-1E4B76L._AC_SX679_.jpg" rating={3}/>
          <Product id='5' title='DJI Phantom 4 Pro V2.0 - Drone Quadcopter UAV with 20MP Camera 1 inch CMOS' price={1599.00} image="https://images-na.ssl-images-amazon.com/images/I/41NTG6JBXqL._AC_SX425_.jpg" rating={5}/>
        </div>
        <div className="home__row">
          <Product id='6' title='LG 65SM9000PUA Nano 9 Series 65" 4K Ultra HD Smart LED NanoCell TV (2019), Black' price={149.99} image="https://images-na.ssl-images-amazon.com/images/I/81SaKN9RL3L._AC_SX425_.jpg" rating={3}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
