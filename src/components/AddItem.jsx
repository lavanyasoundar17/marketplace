import { addItem } from '../api';
import { useState } from 'react';

const AddItem =()=>{
const [itemData, setItemData] = useState({
    item_name: '',
    description: '',
    img_url: '',
    price: '',
    category_name: ''
  })

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setItemData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
         addItem(itemData)
        alert('Item added successfully');
        setItemData({
            item_name: '',
            description: '',
            img_url: '',
            price: '',
            category_name: ''
          });
    } catch (error) {
      console.error('Error adding item:', error);
    }
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="item_name" value={itemData.item_name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={itemData.description} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="img_url" value={itemData.img_url} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={itemData.price} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category_name" value={itemData.category_name} onChange={handleChange} />
      </label>
      <label>
        listed_by:
        <input type="number" name="listed_by" value={itemData.listed_by} onChange={handleChange} />
      </label>
      <button type="submit ">Add Item</button>
    </form>
  )
}

export default AddItem