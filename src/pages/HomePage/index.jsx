import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Character from './Components/Character';
import charactersData from '../../public/data/charactres.json'
import './style.css';

function HomePage() {
  const navigate = useNavigate();
  const [characters] = useState(charactersData);

  const handleCharacterSelect = (character) => {
    localStorage.setItem('selectedCharacter', JSON.stringify(character));
    navigate('/game');
  };

  return (
    <div className="home-container">
      <h1>Choisissez votre personnage</h1>
      <div className="characters-grid">
        {characters.map((character) => (
          <Character
            key={character.name}
            character={character}
            onSelect={handleCharacterSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;