import axios from 'axios';

const API_URL = 'https://nc-marketplace-2-g51j.onrender.com/docs/Items/get-items'

export const fetchItems = async()=>{
const response =  await axios.get(API_URL)
console.log(response.data);
return response.data
}
