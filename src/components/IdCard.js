import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}>
      <img src={picture} alt={`${firstName} ${lastName}`} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
      <div>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}cm</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
