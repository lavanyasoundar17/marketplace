import axios from 'axios';
const API_URL = 'http://localhost:5000/api/items'

export const fetchItems = async()=>{

const response =  await axios.get(API_URL)
return response.data.items || [];
}

export const fetchItem = async(item_id)=>{
    const response = await axios.get(`${API_URL}/${item_id}`);
    return response.data.item || [];

}
