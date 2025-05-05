import Icon from '@mdi/react';
import { mdiGold } from '@mdi/js';
import './style.css';

const QuestStep = ({ quest }) => {
    return(
        <div className="questStep">
            <h3 className="questTitle">{quest.title}</h3>
            <p>{quest.description}</p>
            <span>Objectif : {quest.objective}</span>
            <p>Récompense : <Icon path={mdiGold} size={1} color="gold" /> {quest.reward.gold} pièces d'or</p>
        </div>
    )
}

export default QuestStep
