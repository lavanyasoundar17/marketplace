import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home"
import Item from "./components/Item"
import ItemList from "./components/ItemList";

const App = () =>{
return (
    <div>
        <Router>
        <Header/>
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path = '/items' element ={<ItemList/>}/>
            <Route path ='/items/:item_id' element ={<Item/>}/>

            
        </Routes>
        </Router>
    </div>
)
}

export default App;