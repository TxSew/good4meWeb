import React from 'react'
import './style.scss'
const Category = () => {
  return (
    <main className="main">
    <section className="category">
      <div className="container_fluid">
        <div className="category_wrapper">
          {/* <!-- nav bar --> */}
          <div className="category_navbar">
            <div className="category_filter">
              <span>Filter</span>
              <img className="category_Filter-img" src="src/assets/icons/filter.svg" alt="" />
            </div>
            {/* <!-- search filter --> */}
            <div className="category_filter-item">
              <div className="category_filter-search">
                <span>Search</span>
                <input type="text" placeholder="Search product" />
                <div className="items_search">
                  <div className="item-search">
                      <span>iphone 13</span>
                      <img src="src/assets/icons/x.svg" alt=""/>
                  </div>
                  <div className="item-search">
                      <span>iphone 13</span>
                      <img src="src/assets/icons/x.svg" alt=""/>
                  </div>
                  <div className="item-search">
                      <span>iphone 13</span>
                      <img src="src/assets/icons/x.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- apple watch filter --> */}
            <div className="category_filter-item">
              <div className="category_filter-search">
                <span>Search</span>
                  <div className="checks_filter">
                      <div className="check_filter">
                          <input type="checkbox" name="" id=""/>
                          <span>Apple Watch Series 7</span>
                      </div>
                      <div className="check_filter">
                          <input type="checkbox" name="" id=""/>
                          <span>Apple Watch Series 8</span>
                      </div>
                      <div className="check_filter">
                          <input type="checkbox" name="" id=""/>
                          <span>Apple Watch Series 9</span>
                      </div>
                      <div className="check_filter">
                          <input type="checkbox" name="" id=""/>
                          <span>Apple Watch Series 10</span>
                      </div><div className="check_filter">
                          <input type="checkbox" name="" id=""/>
                          <span>Apple Watch Series 11</span>
                      </div>
                      <div className="check_filter">
                          <input type="checkbox" name="" id=""/>
                          <span>Apple Watch Series 12</span>
                      </div>
                  </div>
                                  </div>
              </div>
              {/* <!-- price filter --> */}
              <div className="category_filter-item">
                  <div className="category_filter-search">
                    <span>Price ($)</span>
                      <div className="filter_price">
                          <span>From</span> 
                          <input type="text" name="" id="" value="1"/>
                           <span>To</span>
                          <input type="text" name="" id="" value="1500"/>
                      </div>
                                      </div>
                  </div>
                  {/* <!-- status --> */}
                  <div className="category_filter-item">
                      <div className="category_filter-search">
                        <span>Status</span>
                          <div className="checks_filter">
                              <div className="check_filter">
                                  <input type="checkbox" name="" id=""/>
                                  <span>All</span>
                              </div>
                              <div className="check_filter">
                                  <input type="checkbox" name="" id=""/>
                                  <span>Available</span>
                              </div>
                              <div className="check_filter">
                                  <input type="checkbox" name="" id=""/>
                                  <span>Unavailable</span>
                              </div>
                              
                          </div>
                                          </div>
                      </div> 
            </div>
            {/* <!-- category product list --> */}
            <div className="category_products">
                <section className="apple">
                      <div className="fashion__heading">
                        <h3>Apple watch</h3>
                         <img src="src/assets/icons/filter.svg" alt=""/>
                      </div>
                      <div className="box_cards">
                      {/* <!--import data category  --> */}
                 
                      </div>
                      <div className="btn_sortPage">
                        <button className="prev prevBtn"><a href="">
                          <img src="src/assets/icons/prev.svg" alt="" />
                        </a></button>
                        <button><a href="">1</a></button>
                        <button><a href="">2</a></button>
                        <button><a href="">3</a></button>
                        <button><a href="">...</a></button>
                        <button><a href="">9</a></button>
                        <button><a href="">10</a></button>
                        <button className="next nextBtn"><a href="">
                          <img src="src/assets/icons/next.svg" alt="" />
                        </a></button>
                      </div>
                 
                  </section>
            </div>
          </div>
        </div>
    </section>
  </main>
  )
}

export default Category