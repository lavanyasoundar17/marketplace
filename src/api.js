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
export const addItem = async(itemData)=>{
    const response = await axios.post(API_URL,itemData)
    return response.data.item
}
export const deleteItem = async (item_id) => {
    try {
      const response = await axios.delete(`${API_URL}/${item_id}`);
      if (response.status === 204) {
        console.log(`Item with ID ${item_id} deleted successfully.`);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
