import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            <div className="checkout__body">
                <div className="checkout__left">
                    <div>
                        <h3>{user?.email}</h3>
                        <h2 className="checkout__title">
                            Your Shopping basket
                    </h2>
                    <FlipMove 
                        // staggerDurationBy="30"
                        // duration={500}
                        // enterAnimation='accordianVertical'
                        // leaveAnimation='accordianVertical'
                        // typeName="ul"
                        >
                            {basket.map(element =>
                                <CheckoutProduct
                                    key={element.id + (Math.random()*10)}
                                    id={element.id}
                                    title={element.title}
                                    image={element.image}
                                    price={element.price}
                                    rating={element.rating}
                                />
                            )}
                            </FlipMove>
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
