
import { useEffect, useState } from 'react';
import {fetchItems, deleteItem} from '../api'
import {Link} from 'react-router-dom'


const ItemList = ({ onAddToCart, onDeleteItem })=>{
    const [items,setItems] = useState([]);

    const getItems = async()=> {
        const itemsData = await fetchItems();
        
        return setItems(itemsData)
    }

    useEffect(()=>{
        getItems();
    },[])
    const handleDelete = async (item_id) => {
        await onDeleteItem(item_id); 
        setAvailableItems((prevItems) => prevItems.filter((item) => item.item_id !== item_id)); // Update local state to remove item
    };
    return (
        <div>
            <h2>Item for sale</h2>
            <ul>
                {items.map((item)=>(
                    <li key={item.item_id}>
                        <Link to={`/items/${item.item_id}`}>
                        {item.item_name} : {item.price}</Link>
                        <button onClick={()=>onAddToCart(item)}>Add To Cart</button>
                        <button onClick={() => handleDelete(item.item_id)}>Delete</button>
                        
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ItemList;