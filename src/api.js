import axios from 'axios';

const api_url = axios.create({
  baseURL: 'https://nc-marketplace-2-g51j.onrender.com',
});

// Fetch all items
export const fetchItems = () => {
  return api_url.get('/api/items')
    .then((res) => {
      console.log(res.data);
      return res.data.items;
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
      return [];
    });
};

// Fetch a specific item by ID
export const fetchItem = async (item_name) => {
  try {
    const response = await api_url.get(`/api/items/${item_name}`);
    return response.data.item;
  } catch (error) {
    console.error(`Error fetching item with ID ${item_name}:`, error);
    return null;
  }
};

// Add a new item
export const addItem = async (itemData) => {
  try {
    const response = await api_url.post('/api/items', itemData);
    return response.data.item;
    
  } catch (error) {
    return null;
  }
};
// export const addItem = async (itemData) => {
//   try {
//     const response = await api_url.post('/api/items', itemData, { 
//       headers: { 'Content-Type': 'application/json' },
//     });
//     return response.data.item;  
//   } catch (error) {
//     console.log("Error adding item:",error);
//     return null;
//   }
// };

// Delete an item by ID
export const deleteItem = async (item_id) => {
  try {
    const response = await api_url.delete(`/api/items/${item_id}`);
    if (response.status === 204) {
      console.log(`Item with ID ${item_id} deleted successfully.`);
    }
  } catch (error) {
    console.error(`Error deleting item with ID ${item_id}:`, error);
  }
};
