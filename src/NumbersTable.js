import React from 'react';

export default function NumbersTable({ limit }) {

    const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: "300px" }}>
      {numbers.map((number) => (
        <div
          key={number}
          style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: number % 2 === 0 ? 'red' : 'white',
            border: '1px solid black',
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}


