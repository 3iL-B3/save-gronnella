import Item from '../../components/Item'
import ItemButton from '../../components/ItemButton';
import items from '../../data/items.json'

const InventoryPage = () => {
    
    return(
        <>
            <h1> Inventory Page </h1>
            <div className='buyable'>
                <h2>Magasin</h2>
                {items.map((item) => (
                    <ItemButton item={item} actionType='buy'/>
                ))}
            </div>
            <div className='posseded'>
            <h2>Inventaire</h2>
                {items.map((item) => (
                    <ItemButton item={item} actionType='use'/>
                ))}
            </div>

            
        </>
        
    );
}

export default InventoryPage