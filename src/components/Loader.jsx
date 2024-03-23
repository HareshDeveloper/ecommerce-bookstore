import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie-animations/loader.json';
import './Loader.scss';
const Loader = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
        <div className="loader-container">
          <div className="loader-content">
            <div className="loader-animation">
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
            <p>Loading...</p>
          </div>
        </div>
      );      
  };
  

export default Loader;
