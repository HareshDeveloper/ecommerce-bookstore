import React, { useState, useEffect } from "react";
import Lottie from 'react-lottie';
import Header from "../../components/Header/Header";
import "../../main.scss";
import "./Login.scss";
import animationData from '../../assets/lottie-animations/login-book-animation.json';
import Loader from "../../components/Loader";
import loginBackground from "../../assets/images/login-background.webp";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Header showButton={false} />
      {isLoading ? (
          <Loader /> 
        ) : (
      <div className="container">
        
        <div className="login-form">
          <h1 className="heading-one">
            Find Your Next <span className="adventure-word">Adventure</span>
          </h1>
          <p className="heading-two">
            Let the story of your next journey unfold with us.
          </p>
          <div id="lottie-animation">
          <Lottie options={defaultOptions} height={300} width={280} />
          </div>
          <div className="button-container">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
        
        <div className="image">
        <img src={loginBackground} />
        </div>
      </div>
      )}
    </div>
  );
};

export default LoginPage;
