import Icon from '@mdi/react';
import { mdiGold } from '@mdi/js';

const QuestStep = ({ quest }) => {
    const questStepStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid black',
        padding: '20px',
        borderRadius: '15px',
        backgroundColor: 'rgb(0, 0, 0, 0.4)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '800px',
    };

    const questTitleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        borderBottom: '1px solid #ccc',
    };

    return(
        <div style={questStepStyle}>
            <h3 style={questTitleStyle}>{quest.title}</h3>
            <p>{quest.description}</p>
            <span>Objectif : {quest.objective}</span>
            <p>Récompense : <Icon path={mdiGold} size={1} color="gold" /> {quest.reward.gold} pièces d'or</p>
        </div>
    )
}

export default QuestStep
