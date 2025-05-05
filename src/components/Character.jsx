function Character(props) {
  return (
    <button 
      className="character-card" 
      onClick={() => props.onSelect(props.character)}
    >
      <img 
        src={`/src/public/images/${props.character.picture}`} 
        alt={props.character.name} 
      />
      <h3>{props.character.name}</h3>
      <p>{props.character.class}</p>
      <div className="character-stats">
        <p>PV: {props.character.health}</p>
        <p>Mana: {props.character.mana}</p>
        <p>Attaque: {props.character.damage}</p>
        <p>Défense: {props.character.defense}</p>
      </div>
    </button>
  );
}

export default Character;