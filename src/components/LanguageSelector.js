import React, { useState } from 'react';
import { Link } from "react-router-dom"

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const renderContent = () => {
    switch (selectedLanguage) {
      case 'English':
        return (
          <div>
            <h1>Welcome to Our Website!</h1>
            <p>Please select your preferred language:</p>
            <div>
              <button onClick={() => handleLanguageSelect('English')}>English</button>
              <button onClick={() => handleLanguageSelect('Spanish')}>Spanish</button>
              <button onClick={() => handleLanguageSelect('French')}>French</button>
              <button onClick={() => handleLanguageSelect('German')}>German</button>
              {/* Add more language buttons as needed */}
            </div>
          </div>
        );
      case 'Spanish':
        return (
          <div>
            <h1>¡Bienvenido a Nuestro Sitio Web!</h1>
            <p>Por favor, seleccione su idioma preferido:</p>
            <div>
              <button onClick={() => handleLanguageSelect('English')}>Inglés</button>
              <button onClick={() => handleLanguageSelect('Spanish')}>Español</button>
              <button onClick={() => handleLanguageSelect('French')}>Francés</button>
              <button onClick={() => handleLanguageSelect('German')}>Alemán</button>
              {/* Add more language buttons as needed */}
            </div>
          </div>
        );
      // Add cases for other languages as needed
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
      <div>
        <br />
        <Link to="/home">Home Page</Link>
      </div>
    </div>
  );
};

export default LanguageSelector;