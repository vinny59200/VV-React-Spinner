import React, { useState } from 'react';
import './LoadingSpinner.css'


function LoadingSpinner(props) {
//   const [loading, setLoading] = useState(props.toggle);
//   setLoading(props.toggle)
//   console.log("vv" +loading)
  console.log(props.toggle)


  return (
    <div className={`loading-spinner ${props.toggle ? 'visible' : 'hidden'}`}>
      <div className="spinner"></div>
    </div>
  );
}


export default LoadingSpinner;