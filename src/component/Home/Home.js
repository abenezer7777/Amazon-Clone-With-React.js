import React from "react";
import Product from "../Product/Product";
import SliderBootstrap from "./SliderBootstrap";

import "./Home.css";
// import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <SliderBootstrap />
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61mL9ySACvL._SX3000_.jpg"
          alt="Estern"
        /> */}
        <div className="home__row">
          <Product
            id="0001"
            title="Yechen Set of 2 Sideboard Storage Cabinet with Handmade Natural Rattan Doors, Accent Cabinet Rattan Cabinet Buffet Cabinet with Storage, for Living Room, Dining Room, Entryway, Kitchen, Nature 2"
            price={269.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91-VA1wCxDL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="0002"
            title="Acanva Luxury Modern Style Living Room Upholstery Curved Sofa with Chaise 2-Piece Set, Right Hand Facing Sectional, Pearl Boucle Couch, Dark Grey"
            price={2491.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/91spr5v4pfL._AC_SX679_.jpg"
          />
          {/* <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          /> */}
        </div>
        <div className="home__row">
          <Product
            id="0003"
            title="ANRABESS Women's Square Neck Mesh Long Sleeve Ruched Bodycon Mini Dress Party Club Cocktail Short Dresses"
            price={37.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/610yd63s1lL._AC_UY741_.jpg"
          />

          {/* <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          /> */}
          <Product
            id="0004"
            title="ASH Women's Ugo Strass Flat Sandal"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EXKTfuXfL._AC_UX695_.jpg"
          />
          <Product
            id="0005"
            title="ATTCL Men's Driving Polarized Sunglasses For Men - Al-Mg Metal Frame Ultra Light"
            price={27}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ySK1WA82L._AC_UX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            className="bigDiv "
            id="0006"
            title="Z-Edge U24C 24-inch Curved Gaming Monitor, Full HD 1080P 1920x1080 LED Backlight Monitor, with 75Hz Refresh Rate and Eye-Care Technology, 178° Wide View Angle, Built-in Speakers, VGA+HDMI"
            price={1094.98}
            rating={4}
            // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            image="https://m.media-amazon.com/images/I/81dqkYh5JSL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="0007"
            title="Telescope 130EQ Newtonian Reflector Telescopes for Adults, Professional Telescopes for Adults Astronomy, Comes with 1.5X Barlow Lens Smartphone Adapter & 13% T Moon Filter"
            price={37.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71SwllVQeiL._AC_SX679_.jpg"
          />

          {/* <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          /> */}

          <Product
            id="0009"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="0008"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row">
          <Product
            id="0010"
            title="ANRABESS Women's Square Neck Mesh Long Sleeve Ruched Bodycon Mini Dress Party Club Cocktail Short Dresses"
            price={37.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/610yd63s1lL._AC_UY741_.jpg"
          />

          {/* <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          /> */}
          <Product
            id="0011"
            title="ASH Women's Ugo Strass Flat Sandal"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EXKTfuXfL._AC_UX695_.jpg"
          />
          <Product
            id="0012"
            title="ATTCL Men's Driving Polarized Sunglasses For Men - Al-Mg Metal Frame Ultra Light"
            price={27}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ySK1WA82L._AC_UX679_.jpg"
          />
          <Product
            id="0011"
            title="ASH Women's Ugo Strass Flat Sandal"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EXKTfuXfL._AC_UX695_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
