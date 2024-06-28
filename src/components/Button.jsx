import React from 'react';

const Button=({ className , onClick})=> {
  return (
    <button className={`button ${className}`} onClick={onClick}>{className.charAt(0).toUpperCase() + className.slice(1)}</button>
  );
}

export default Button;
