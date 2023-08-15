import React from 'react'
import './style.scss'
const Trending = () => {
  return (
    <section className="trending">
    <div className="container">
      <div className="trending__wrapper">
        <div className="trending_content">
          <h1 className="trending_heading">TRENDING PRODUCT</h1>
          <p className="trending_desc">
            We provide the best and highest-quality products on the market
            today
          </p>
          <div className="trending_title">
            <span className="name_trending">Apple Watch Dragon</span>
            <span className="trending_price"> $1500 </span>
          </div>
          <a href="" className="btn btn__addcard">
            <img src="src/assets/images/Shape.png" alt="" />
            <span>Add to card</span>
          </a>
        </div>
        {/* <!-- trending image --> */}
        <div className="trending__image">
          <img src="src/assets/images/watch.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Trending