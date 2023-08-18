import React, { useEffect, useState } from "react";
import "./style.scss";
import { useCart } from "../../../hooks/useCart/UseCart";
import { CartProduct } from "../../../models/Product/CartProduct";
function Cart() {
  const [CartItem, setCartItem] = useState<CartProduct[]>([]);
  const {
    cartItems,
    getTotalItems,
    getTotalPrice,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  useEffect(() => {
    setCartItem(cartItems);

    console.log(cartItems);
  }, [cartItems]);

  function handleRemove(id: number) {
    if (id) {
      removeItem(id);
      setCartItem(cartItems);
    }
  }
  const handleincreaseQuantity = (id: number) => {
    increaseQuantity(id);
  };
  const handledecreaseQuantity = (id: number) => {
    decreaseQuantity(id);
  };
  return (
    <div>
      <main className="main_mycard">
        <div className="container_fluid">
          <div className="mycard">
            <div className="mycard_heading">
              <h3>My card</h3>
              <span className="number_productCard">
                {" "}
                {getTotalItems()} products
              </span>
            </div>
            <div className="mycard_wrapper">
              {/* item card */}
              <div className="mycard_items">
                {CartItem.map((e, i) => {
                  return (
                    <div key={i} className="mycard-item">
                      <div className="mycard-item-checked">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="styled-checkbox-1"></label>
                        <div className="mycard-item-thumb">
                          <img
                            src="src/assets/images/mycard_thumb.jpg"
                            alt=""
                          />
                          <div className="mycard-item-thumb-content">
                            <p>$</p>
                            <span>Color: Gray</span>
                          </div>
                        </div>
                      </div>
                      <p className="mycard_price">${e.product.price}</p>
                      <div className="mycard_count">
                        <button
                          className="prev_mycard"
                          onClick={() =>
                            handledecreaseQuantity(e.product.productId)
                          }
                        >
                          -
                        </button>
                        <span className="mycard_price-value">{e.quantity}</span>
                        <button
                          className="next_mycard"
                          onClick={() =>
                            handleincreaseQuantity(e.product.productId)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="mycard_priceTotal">
                        ${e.product.price * e.quantity}
                      </div>
                      <div
                        className="mycard_remove"
                        onClick={() => handleRemove(e.product.productId)}
                      >
                        <img src="src/assets/icons/remove.svg" alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* order information */}
              <div className="mycard_infomation">
                <h3>Order information</h3>
                <div className="mycard_infomation-content">
                  <div className="total_amount">
                    <span className="key_total_amount">Total amount:</span>
                    <span className="total_amount_value">
                      ${getTotalPrice()}
                    </span>
                  </div>
                  <div className="total_amount">
                    <span className="key_total_amount">Discount:</span>
                    <span className="total_amount_value">$448</span>
                  </div>
                  <div className="total_amount">
                    <span className="key_total_amount">Total:</span>
                    <span className="total_amount_value">
                      ${getTotalPrice()}
                    </span>
                  </div>
                </div>
                <div className="note_infomation">
                  <span>Note</span>
                  <textarea cols={30} rows={10} defaultValue={""} />
                </div>
                <a href="/payment.html" className="linkPaynow">
                  Paynow
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
