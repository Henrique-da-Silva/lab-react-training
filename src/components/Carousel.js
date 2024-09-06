import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '0 10px' }}
      />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}


