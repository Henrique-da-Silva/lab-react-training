import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
import RGBCss from '../RGBColorPickerCss/RGB.css'


function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  // Funções para alterar os valores das cores
  const handleRChange = (e) => setRValue(Number(e.target.value));
  const handleGChange = (e) => setGValue(Number(e.target.value));
  const handleBChange = (e) => setBValue(Number(e.target.value));

  const rgbColorStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
    width: '150px',
    height: '150px',
    marginTop: '20px'
  };

  return (
    <div>
      {/* Renderiza 3 SingleColorPicker para R, G e B */}
      <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />

      {/* Exibe o quadrado com a cor RGB atual */}
      <div style={rgbColorStyle}></div>

      {/* Exibe a string RGB */}
      <p>RGB ({rValue}, {gValue}, {bValue})</p>
    </div>
  );
}

export default RGBColorPicker;
