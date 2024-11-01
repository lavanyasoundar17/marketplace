import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItem, fetchItems } from "../api";


const Item = ()=>{
    const[item,setItem] = useState([]);
    const {item_id} = useParams();
    const [loading, setLoading] = useState(true);

    const getItem = async()=>{
        const item = await fetchItem(item_id);
       setItem(item);
        setLoading(false);
    }

    useEffect (()=>{
        getItem();
    },[item_id])
    if (loading) return <p>Loading...</p>;
    if (!item) return <p>Item not found.</p>;
    return (
        <div>
            <h2>{item.item_name}</h2>
            <p>{item.description}</p>
            <img src={item.img_url} alt={item.item_name} />
            <p>{item.price}</p>
            <p>{item.category_name}</p>
        </div>
    )
}

export default Item;