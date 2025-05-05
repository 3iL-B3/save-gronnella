import Item from '../../components/Item'
import ItemButton from '../../components/ItemButton';
import items from '../../data/items.json'

const InventoryPage = () => {
    
    return(
        <>
            <h1> Inventory Page </h1>
            <div className='buyable'>
                {items.map((item) => (
                    <ItemButton item={item} actionType='buy'/>
                ))}
            </div>            
            
        </>
        
    );
}

export default InventoryPage