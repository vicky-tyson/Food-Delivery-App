import React, { useContext } from "react";
import "./placeorder.css";
import { StoreContext } from "../../Context/StoreContext";

export default function PlaceOrder() {

  const { getTotalCartAmount} = useContext(StoreContext);

  return (
      <form action="" className="place-order">
          <div className="place-order-left">
              <p className="title">Delivery Information</p>
              <div className="multi-fields">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="E-mail address" />
              <input type="text" placeholder="Street" />
              <div className="multi-fields">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
              </div>
              <div className="multi-fields">
                <input type="number" placeholder="Zip code" />
                <input type="text" placeholder="country" />
              </div>
              <input type="number" placeholder="Phone" />
          </div>
          <div className="place-order-right">
          <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
             <div className="cart-total-details">
                 <p>Subtotal</p>
                 <p>₹ {getTotalCartAmount()}</p>
             </div>
             <hr />
             <div className="cart-total-details">
                 <p>Delivery Fee</p>
                 <p>₹ {getTotalCartAmount() === 0 ? 0 : 2}</p>
             </div>
             <hr />
             <div className="cart-total-details">
                 <p>Total</p>
                 <p>₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
             </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
          </div>
      </form>
  )
}
