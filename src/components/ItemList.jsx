
import { useEffect, useState } from 'react';
import {fetchItems} from '../api'
import {Link} from 'react-router-dom'


const ItemList = ()=>{
    const [items,setItems] = useState([]);

    const getItems = async()=> {
        const itemsData = await fetchItems();
        
        return setItems(itemsData)
    }

    useEffect(()=>{
        getItems();
    },[])

    return (
        <div>
            <h2>Item for sale</h2>
            <ul>
                {items.map((item)=>(
                    <li key={item.item_id}>
                        <Link to={`/items/${item.item_id}`}>
                        {item.item_name} : {item.price}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ItemList;