import React from 'react'
import ItemProductProps from '../../models/Product/ItemProductProps';
 


interface ProductItem  {
   products: ItemProductProps,
  handleCart: (productId: number) => void;
}
 
const ItemProduct:React.FC<ProductItem> = ({products = {
  name: '44',
  desc: 'djd',
  remaining: 'sjsjsj',
  price: 333,
  productId: 0
} , handleCart}) => {
  
  return (
 <div className="box_card">
            <div className="box_card-image">
              <img src="src/assets/images/watch.jpg" alt="" />
            </div>
            {/* <!-- box content --> */}
            <div className="box_card-content">
              <div className="box_card-name">
                <span>{products.name}</span>
                <a href="" className="status_card">Available</a>
              </div>
              <p className="box_card-desc">
                 {products.desc}
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
                <span>{products.remaining}</span>
              </div>
              <div className="box_card-price">
                <span>${products.price}</span>
                <button onClick={() => handleCart(products.productId)}>
                  <img src="src/assets/images/Shape.png" alt="" />
                </button>
              </div>
            </div>
          </div>
  )
}

export default ItemProduct