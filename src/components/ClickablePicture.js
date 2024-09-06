import React, {useState} from "react";



export default function ClickablePicture({ img, imgClicked }) {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked((prevIsClicked) => !prevIsClicked);
    };
  
    return (
      <img
        src={isClicked ? imgClicked : img}
        alt="Clickable"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    );
  }