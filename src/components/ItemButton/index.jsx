import Item from '../../components/Item'

function ItemButton ({item, actionType}) {
    const handleClick = () => {
        alert(actionType+' '+item.name)
    }
    return (
        <>
            <div>
                <Item item={item}/>
                <button onClick={handleClick}>
                    {actionType === 'buy' ? item.price : 'boire'}
                </button>
            </div>
            
        </>
    );
}

export default ItemButton