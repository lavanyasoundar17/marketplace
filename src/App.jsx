import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home"
import Item from "./components/Item"

const App = () =>{
return (
    <div>
        <Router>
        <Header/>
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path = '/items' element ={<Item/>}/>

            
        </Routes>
        </Router>
    </div>
)
}

export default App;