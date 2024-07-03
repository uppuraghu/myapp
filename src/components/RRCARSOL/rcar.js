import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Rcar() {
  return (
    <div>
      <Carousel>
        <div>
          <img 
            src="https://miro.medium.com/v2/resize:fit:1400/1*uovQPiAmMmVS4w0lK2iDaw.jpeg" 
            style={{ height: '700px', width: 'auto' }} 
            alt="Legend 1" 
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img 
            src="https://cdn.pixabay.com/photo/2019/01/28/02/10/girl-taking-photo-3959468_1280.jpg" 
            style={{ height: '700px', width: 'auto' }} 
            alt="Legend 2" 
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img 
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" 
            style={{ height: '700px', width: 'auto' }} 
            alt="Legend 3" 
          />
          <p className="legend">Legend 3</p>
         
        </div>
      </Carousel>
      
    </div>
  );
}

export default Rcar;

