import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function HomePage() {
  const [hasCharacter, setHasCharacter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCharacter = localStorage.getItem('character');
    setHasCharacter(!!savedCharacter);
  }, []);

  const handleCharacterSelect = () => {
    navigate('/character-select');
  };

  const handlePlay = () => {
    navigate('/game');
  };

  return (
    <div className="home-container">
      <h1 className="game-title">Sauvez Gronnella</h1>
      
      <div className="buttons-container">
        {!hasCharacter && (
          <button 
            className="character-button"
            onClick={handleCharacterSelect}
          >
            Choisir un personnage
          </button>
        )}
        
        {hasCharacter && (
          <button 
            className="play-button"
            onClick={handlePlay}
          >
            Jouer
          </button>
        )}
      </div>
    </div>
  );
}

export function HomePage() {}