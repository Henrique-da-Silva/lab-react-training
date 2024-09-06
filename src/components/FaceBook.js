
import profiles from '../data/berlin.json';
import ComponentFacebookCss from '../FacebookCss/ComponentFacebook.css';
import React, { useState } from 'react';


function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Lista única de países
  const countries = [...new Set(profiles.map((profile) => profile.country))];

  // Função para selecionar país
  const handleCountryClick = (country) => {
    setSelectedCountry(country === selectedCountry ? '' : country); // Desmarca se o país já estiver selecionado
  };

  // Função para alternar exibição de perfil ao clicar na imagem
  const handleProfileClick = (index) => {
    setSelectedProfile(index === selectedProfile ? null : index);
  };

  // Função de pesquisa
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar perfis com base no país selecionado e termo de pesquisa
  const filteredProfiles = profiles
    .filter((profile) => 
      (selectedCountry === '' || profile.country === selectedCountry) &&
      (profile.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || profile.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'firstName') {
        return a.firstName.localeCompare(b.firstName);
      } else if (sortBy === 'lastName') {
        return a.lastName.localeCompare(b.lastName);
      }
      return 0;
    });

  return (
    <div>
      {/* Botões de País */}
      <div className="country-buttons">
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => handleCountryClick(country)}
            style={{ backgroundColor: country === selectedCountry ? 'blue' : 'white', color: country === selectedCountry ? 'white' : 'black' }}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Barra de Pesquisa */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {/* Botões de Classificação */}
      <div className="sort-buttons">
        <button onClick={() => setSortBy('firstName')}>Sort by First Name</button>
        <button onClick={() => setSortBy('lastName')}>Sort by Last Name</button>
      </div>

      {/* Exibição dos Perfis */}
      <div className="facebook">
        {filteredProfiles.map((profile, index) => (
          <div key={index} className="profile-card" style={{ backgroundColor: profile.country === selectedCountry ? 'lightblue' : 'white' }}>
            <img
              src={profile.img}
              alt={`${profile.firstName} ${profile.lastName}`}
              onClick={() => handleProfileClick(index)}
              className="profile-pic"
            />
            {selectedProfile === index && (
              <div className="profile-info">
                <p><strong>First name:</strong> {profile.firstName}</p>
                <p><strong>Last name:</strong> {profile.lastName}</p>
                <p><strong>Country:</strong> {profile.country}</p>
                <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceBook;
