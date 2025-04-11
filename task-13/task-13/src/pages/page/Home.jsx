import React, { useState } from 'react';
import Slider from '../../components/slider/Slider';
import './home.scss';

import img1 from "../../assets/images/img_1.jpg"
import img2 from "../../assets/images/img_2.png"
import img3 from "../../assets/images/img_3.jpg"
import img4 from "../../assets/images/img_4.webp"
import img5 from "../../assets/images/img_5.jpg"
import img6 from "../../assets/images/img_6.jpeg"
import img7 from "../../assets/images/img_7.jpg"



const Home = () => {
 
  let allImg=[img1,img2,img3,img4,img5,img6,img7]

  return (
    <>
    <div className='home_card'>



      <Slider allImg={allImg}/>
    </div>
    </>
  );
};

export default Home;
