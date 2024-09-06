import React from 'react';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '300px',
    height: '180px',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
  };

  // Seleção da logo com base no tipo de cartão
  const cardTypeLogo =
    type === 'Visa'
      ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
      : 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg';

  // Formatação do número do cartão para exibir apenas os 4 últimos dígitos
  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

  // Formatando o mês e ano de expiração
  const formattedMonth = expirationMonth.toString().padStart(2, '0');
  const formattedYear = expirationYear.toString().slice(-2);

  return (
    <div style={cardStyle}>
      {/* Logo do cartão */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img src={cardTypeLogo} alt={type} style={{ height: '30px' }} />
      </div>

      {/* Número do cartão */}
      <div style={{ fontSize: '1.5em', letterSpacing: '2px', textAlign: 'center' }}>
        {maskedNumber}
      </div>

      {/* Informações adicionais */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em' }}>
        <div>
          <span>
            Expires {formattedMonth}/{formattedYear}
          </span>
          <span style={{ marginLeft: '10px' }}>{bank}</span>
        </div>
      </div>

      {/* Nome do proprietário */}
      <div style={{ fontSize: '1em' }}>{owner}</div>
    </div>
  );
}


