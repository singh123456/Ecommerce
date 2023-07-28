import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext);
  return (<div className="cartItem">
     <img src={productImage} alt=" not found"/>
     <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className="countHandler">
        <button onClick={()=>addToCart(id)}> + </button>
        <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
        {/* here we used number to covert the string to number since input is text type */}
         <button onClick={()=>removeFromCart(id)}> - </button>
        </div>
     </div>
  </div>
  );
}
