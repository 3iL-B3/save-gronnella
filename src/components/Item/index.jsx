function Item ({item}) {
    return (
        <>
            <img src={'/images/'+item.picture} alt={item.name} />
        </>
    );
}

export default Item