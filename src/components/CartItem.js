import React from "react";
import { ChevronUp, ChevronDown } from '../icons';
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button 
          className="btn" 
          onClick={() => dispatch(removeItem(id))}
          >
            remove
        </button>
      </div>
      <div>
        <button
        className="amount-btn"
        onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
        onClick={() => {
          if (amount === 1) {
            dispatch(removeItem(id));
          return;
          }
          dispatch(decrease({id}));
        }} 
        className="amount-btn"
        >
        <ChevronDown />
        </button>
      </div>
    </article>
  )
}
export default CartItem;