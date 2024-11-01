import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home"
import Item from "./components/Item"
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import Cart from "./components/Cart";
import {deleteItem} from './api'


const App = () =>{
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
        setCart((prevCart) => {const existingItem = prevCart.find(cartitem=>cartitem.item_id===item.item_id)
            if(existingItem){
                return [...prevCart]
            }
            else{
                return [...prevCart,item]
            }
        }
    );
      };
    
      const handleRemoveFromCart = (item_id) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item_id !== item_id));
      };
      const handleDeleteItem = async (item_id) => {
        await deleteItem(item_id); 
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item_id !== item_id)); 
      }
return (
    <div>
        <Router>
        <Header/>
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path = '/items' element ={<ItemList onAddToCart={handleAddToCart} onDeleteItem={handleDeleteItem}/>}/>
            <Route path ='/items/:item_id' element ={<Item/>}/>
            <Route path ='/additem' element ={<AddItem/>}/>
            <Route path ='/cart' element ={<Cart cartItems={cart} removeFromCart={handleRemoveFromCart}/>}/>
        </Routes>
        </Router>
    </div>
)
}

export default App;