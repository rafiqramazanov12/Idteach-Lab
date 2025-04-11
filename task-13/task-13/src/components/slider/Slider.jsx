import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './slider.scss';

const Slider = ({ allImg }) => {
  const [imgIndex, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      allImg(prevIndex => (prevIndex < allImg.length - 1 ? prevIndex + 1 : 0))
    }, 2000);
    return () => clearInterval(interval)
  }, [allImg.length]);

  const nextBtn = () => {
    setIndex(prevIndex => prevIndex < allImg.length - 1 ? prevIndex + 1 : 0)
  };
  const previousBtn = () => {
    setIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : allImg.length - 1)
  }
  return (
    <>
      <div className='boxes'>
        <img className='boxes_img' src={allImg[imgIndex]} alt="no img" />
        <div className='boxes_btns'>
          <button className='boxes_btn' onClick={previousBtn}><FaArrowLeft /></button>
          <button className='boxes_btn' onClick={nextBtn} ><FaArrowRight /></button>
        </div>
      </div>

    </>
  )
}

export default Slider

