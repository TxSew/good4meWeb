import React from 'react'
import './style.scss'
const Fashion = () => {
  return (
    <section className="fashion" id="fashion">
    <div className="container">
      <div className="fashion__heading">
        <h3>Fashion style</h3>
      </div>
      <div className="fashion_thumbs">
        <div className="fashion_thumb">
          <div className="fashion_thumb-content">
            <h3 className="fashion_thumb-title">
              Luxurious <span>Eyewear</span>
            </h3>
            <p className="fashion_desc">
              See the beauty of exotic world with the luxurious glasses
            </p>
            <span className="fashion_price">$1500</span>
            <a href="" className="btn btn__addcard">
              <img src="src/assets/images/Shape.png" alt="" />
              <span>Add to card</span>
            </a>
          </div>
          <div className="fashion_thumb_image">
            <img src="src/assets/images/glass.png" alt="" />
          </div>
        </div>
        <div className="fashion_thumb">
          <div className="fashion_thumb-content">
            <h3 className="fashion_thumb-title">
              Luxurious <span>Eyewear</span>
            </h3>
            <p className="fashion_desc">
              See the beauty of exotic world with the luxurious glasses
            </p>
            <span className="fashion_price">$1500</span>
            <a href="" className="btn btn__addcard">
              <img src="src/assets/images/Shape.png" alt="" />
              <span>Add to card</span>
            </a>
          </div>
          <div className="fashion_thumb_image">
            <img src="src/assets/images/shoose.png" alt="" />
          </div>
        </div>
        <div className="fashion_thumb">
          <div className="fashion_thumb-content">
            <h3 className="fashion_thumb-title">
              Luxurious <span>Eyewear</span>
            </h3>
            <p className="fashion_desc">
              See the beauty of exotic world with the luxurious glasses
            </p>
            <span className="fashion_price">$1500</span>
            <a href="" className="btn btn__addcard">
              <img src="src/assets/images/Shape.png" alt="" />
              <span>Add to card</span>
            </a>
          </div>
          <div className="fashion_thumb_image">
            <img src="src/assets/images/shoose.png" alt="" />
          </div>
        </div>
        <div className="fashion_thumb">
          <div className="fashion_thumb-content">
            <h3 className="fashion_thumb-title">
              Luxurious <span>Eyewear</span>
            </h3>
            <p className="fashion_desc">
              See the beauty of exotic world with the luxurious glasses
            </p>
            <span className="fashion_price">$1500</span>
            <a href="" className="btn btn__addcard">
              <img src="src/assets/images/Shape.png" alt="" />
              <span>Add to card</span>
            </a>
          </div>
          <div className="fashion_thumb_image">
            <img src="src/assets/images/glass.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="see_more_wrapper">
      <div className="container">
        <a href="/category.html" className="see__more"> See More </a>
      </div>
    </div>
  </section>
  )
}

export default Fashion