import React, { useState } from 'react';
import './LoadingSpinner.css'
import logo from './/avatar.png';


function LoadingSpinner(props) {
//   const [loading, setLoading] = useState(props.toggle);
//   setLoading(props.toggle)
//   console.log("vv" +loading)
  console.log(props.toggle)


  return (
    <div className={`loading-spinner ${props.toggle ? 'visible' : 'hidden'}`}>
      <div className="spinner"><img src={logo} width={'36'}/></div>
    </div>
  );
}


export default LoadingSpinner;