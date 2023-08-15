import React from 'react'
interface ItemProductProps {
  name: string;
  desc: string;
  remaining: string;
  price: string;
  productId: string
}
const ItemProduct:React.FC<ItemProductProps> = ({price , name , remaining, desc, productId ="34"}) => {
     function handleCart(id: string) {
        console.log(id);
     }
  return (
 <div className="box_card">
            <div className="box_card-image">
              <img src="src/assets/images/watch.jpg" alt="" />
            </div>
            {/* <!-- box content --> */}
            <div className="box_card-content">
              <div className="box_card-name">
                <span>{name}</span>
                <a href="" className="status_card">Available</a>
              </div>
               {productId}
              <p className="box_card-desc">
                 {desc}
              </p>
              <div className="box_card-color">
                <span>Colors:</span>
                <div className="box_card-circle">
                  <button className="btn btn__white"></button>
                  <button className="btn btn__green"></button>
                  <button className="btn btn__brown"></button>
                  <button className="btn btn__red"></button>
                </div>
              </div>
              <div className="box_card-remaining">
                <span className="box_card-remaining-name">Remaining:</span>
                <span>{remaining}</span>
              </div>
              <div className="box_card-price">
                <span>${price}</span>
                <button onClick={() => handleCart(productId)}>
                  <img src="src/assets/images/Shape.png" alt="" />
                </button>
              </div>
            </div>
          </div>
  )
}

export default ItemProduct