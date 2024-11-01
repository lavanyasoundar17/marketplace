import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

const items = [{
    "item_id": 1,
    "item_name": "The Holy Grail",
    "description": "Defo the real deal and not a prop from Indiana Jones",
    "img_url": "https://test.com/The Holy Grail.jpg",
    "price": 5000,
    "category_name": "Relics"
  },
  {
    "item_id": 2,
    "item_name": "The sword of 1000 truths",
    "description": "Not to be entrusted to a noob",
    "img_url": "https://test.com/1000-truths.jpg",
    "price": 2999,
    "category_name": "Relics"
  }]

  app.get('/api/items',(req,res)=>{
    res.status(200).json({items});
  })
  app.get('/api/items/:item_id',(req,res)=>{
    const { item_id } = req.params;
  const item = items.find(item => item.item_id === parseInt(item_id));
  if (item) {
    res.status(200).json({ item });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
  })
  app.post('/api/items',(req,res)=>{
    const {item_name, description, img_url, price, category_name}= req.body;
    const newItem = {
        item_id : items.length+1,
        item_name,
        description,
        img_url,
        price,
        category_name
    }
    items.push(newItem);
    res.status(201).json({ item: newItem })
  })
  app.delete('/api/items/:item_id', (req, res) => {
    const { item_id } = req.params;
        const itemIndex = items.findIndex(item => item.item_id === parseInt(item_id));
  
    if (itemIndex > -1) {
      items.splice(itemIndex, 1);  
      res.status(204).send(); 
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  });
  

  app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}` )
  })