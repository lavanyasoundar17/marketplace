import React from 'react';

const Cart = ({ cartItems = [], removeFromCart }) => { 
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.item_id}>
              {item.item_name} : {item.price}
              <button onClick={() => removeFromCart(item.item_id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
