import React,
       { Component, Fragment }            from 'react';
import { Link }                 from 'react-router-dom';

import './index.css';

const LoadingScreen = () => {


    return (
      <div data-component="load-screen">
        <i data-spinner></i>
      </div>
    );


}

export default LoadingScreen;
