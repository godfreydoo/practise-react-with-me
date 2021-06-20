import React from 'react';

import applePieImg from '../assets/apple_pie.jpg';
import blackCoffeeImg from '../assets/black_coffee.jpg';
import { applePieDesc, blackCoffeeDesc } from './desc';

function ShowPictureAndDesc () {
  return (
    <div className="imgContainer">
      <img src={applePieImg} alt={applePieDesc}/>
      <img src={blackCoffeeImg} alt={blackCoffeeDesc}/>
    </div>
  )
}

export default ShowPictureAndDesc;