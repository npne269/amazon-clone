import React,{forwardRef} from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(({ id, image, title, price, rating},ref) =>{
   const [{basket},dispact] = useStateValue();
   const removeFromBasket = ()=>{
    dispact({
        type:'REMOVE_FROM_BASKET',
        id:id,
    })
}
   
    return (
        <div className="checkoutProduct" ref={ref}>
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span role="img" aria-label='star'>⭐️</span>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from cart</button>
            </div>
        </div>
    )
})

export default CheckoutProduct;
