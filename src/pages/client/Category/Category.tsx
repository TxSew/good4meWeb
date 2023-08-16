import React, { ChangeEvent } from "react";
import "./style.scss";
const Category = () => {
   function handleChange(e: ChangeEvent<HTMLInputElement>) {
 console.log(e.target.value);
   }
  return (
    <main className="main">
      <section className="category">
        <div className="container_fluid">
          <div className="category_wrapper">
            {/* <!-- nav bar --> */}
            <div className="category_navbar">
              <div className="category_filter">
                <span>Filter</span>
                <img
                  className="category_Filter-img"
                  src="src/assets/icons/filter.svg"
                  alt=""
                />
              </div>
              {/* <!-- search filter --> */}
              <div className="category_filter-item">
                <div className="category_filter-search">
                  <span>Search</span>
                  <input type="text" placeholder="Search product" onChange={handleChange} />
                  <div className="items_search">
                    <div className="item-search">
                      <span>iphone 13</span>
                      <img src="src/assets/icons/x.svg" alt="" />
                    </div>
                    <div className="item-search">
                      <span>iphone 13</span>
                      <img src="src/assets/icons/x.svg" alt="" />
                    </div>
                    <div className="item-search">
                      <span>iphone 13</span>
                      <img src="src/assets/icons/x.svg" alt="" />
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
                      <input type="checkbox" name="" id="" />
                      <span>Apple Watch Series 7</span>
                    </div>
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
                      <span>Apple Watch Series 8</span>
                    </div>
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
                      <span>Apple Watch Series 9</span>
                    </div>
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
                      <span>Apple Watch Series 10</span>
                    </div>
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
                      <span>Apple Watch Series 11</span>
                    </div>
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
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
                    <input type="text" name="" id="" value="1" />
                    <span>To</span>
                    <input type="text" name="" id="" value="1500" />
                  </div>
                </div>
              </div>
              {/* <!-- status --> */}
              <div className="category_filter-item">
                <div className="category_filter-search">
                  <span>Status</span>
                  <div className="checks_filter">
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
                      <span>All</span>
                    </div>
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
                      <span>Available</span>
                    </div>
                    <div className="check_filter">
                      <input type="checkbox" name="" id="" />
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
                  <img src="src/assets/icons/filter.svg" alt="" />
                </div>
                <div className="box_cards">
                  {/* <!--import data category  --> */}
                  <div className="box_card">
                    <div className="box_card-image">
                      <img src="src/assets/images/watch.jpg" alt="" />
                    </div>
                    {/* <!-- box content --> */}
                    <div className="box_card-content">
                      <div className="box_card-name">
                        <span>sj</span>
                        <a href="" className="status_card">
                          Available
                        </a>
                      </div>
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
                        <span className="box_card-remaining-name">
                          Remaining:{" "}
                        </span>
                        <span>$3939</span>
                      </div>
                      <div className="box_card-price">
                        <span>$1500</span>
                        <button className="btnCard">
                          <img src="./assets/images/Shape.png" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn_sortPage">
                  <button className="prev prevBtn">
                    <a href="">
                      <img src="src/assets/icons/prev.svg" alt="" />
                    </a>
                  </button>
                  <button>
                    <a href="">1</a>
                  </button>
                  <button>
                    <a href="">2</a>
                  </button>
                  <button>
                    <a href="">3</a>
                  </button>
                  <button>
                    <a href="">...</a>
                  </button>
                  <button>
                    <a href="">9</a>
                  </button>
                  <button>
                    <a href="">10</a>
                  </button>
                  <button className="next nextBtn">
                    <a href="">
                      <img src="src/assets/icons/next.svg" alt="" />
                    </a>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Category;
