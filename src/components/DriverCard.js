import React from "react";

 function Rating({children}){

    const roundedValue = Math.round(children)

    const stars = '★'.repeat(roundedValue) + '☆'.repeat(5 - roundedValue)

    return(

    <div style={{ fontSize: '2em', color: '#ffd700' }}>
      {stars}
    </div>

    )
}

export default function DriverCard({name, rating, img, car}){

    const cardStyle = {
        backgroundColor: '#455EB5',
        color: 'white',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        width: '500px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
        marginBottom: '20px',
      };
    
      const imgStyle = {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginRight: '20px',
      };
    
      const infoStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      };

      return(
        <div style={cardStyle}>
        <img src={img} alt={name} style={imgStyle} />
        <div style={infoStyle}>
        <h2 style={{ margin: '0 0 10px 0' }}>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{`${car.model} - ${car.licensePlate}`}</p>
      </div>

        </div>
      )

}