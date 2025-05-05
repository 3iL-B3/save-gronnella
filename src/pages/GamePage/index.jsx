import { NavLink } from "react-router-dom";
import QuestStep from "../../components/QuestStep"
import questsList from "../../data/questsList.json"

const GamePage = () =>{
    const actualQuest = questsList.find(obj => obj.id === 1);

    const actionsStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    }

    return(
        <>
            <QuestStep quest={actualQuest}/>
            <div style={actionsStyle}>
                <NavLink to='/inventaire'><button>Inventaire</button></NavLink>
                <NavLink to='/combat'><button>Combattre</button></NavLink>
            </div>
        </>
    )
}

export default GamePage