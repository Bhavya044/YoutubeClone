import React from "react";
import "./Cover.css";
import Carousel from 'react-bootstrap/Carousel'
import cover1 from './imgs/cover1.jpg'
import cover2 from './imgs/cover2.jpg'
import cover3 from './imgs/cover3.jpg'

function Cover() {
  return (
    <div className="Cover">
   <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cover1}
                    alt="First slide"
                />
               
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://1.bp.blogspot.com/-85uKjUCMDYw/YMOKoA2Px6I/AAAAAAAAgj8/314GLiUMb3Yi3rLYgoZtPJpDQr-Tg-kdwCLcBGAsYHQ/w600-h315-p-k-no-nu/Excuses%2BAP%2BDhillon%2BGurinder%2BGill.jpg'
                    alt="Third slide"
                />
            
               
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cover2}
                    alt="Third slide"
                />
          
        </Carousel.Item>
          <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cover3}
                    alt="Third slide"
                />
          
                </Carousel.Item>
            </Carousel>
      
    </div>
  );
}

export default Cover;
