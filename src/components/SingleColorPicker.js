import React from 'react';

function SingleColorPicker({ color, value, onChange }) {
  // Determina a cor de fundo do quadrado com base no valor da cor (r, g ou b)
  const colorStyle = {
    backgroundColor:
      color === 'r' ? `rgb(${value}, 0, 0)` :
      color === 'g' ? `rgb(0, ${value}, 0)` :
      `rgb(0, 0, ${value})`,
    width: '50px',
    height: '50px',
    display: 'inline-block',
    marginRight: '10px'
  };

  return (
    <div class="RGB">
      {/* Quadrado mostrando a cor */}
      <div style={colorStyle}></div>
      {/* Campo de entrada para alterar o valor */}
      <input
        type="number"
        value={value}
        min={0}
        max={255}
        onChange={onChange}
      />
      <span>{color.toUpperCase()}</span>
    </div>
  );
}

export default SingleColorPicker;
