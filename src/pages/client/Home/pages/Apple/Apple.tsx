import React from "react";
import "./style.scss";
import ItemProduct from "../../../../../components/itemProduct/itemProduct";
interface TypeData {
  name: string;
  price: string;
  desc: string;
  remaining: string;
  id:string;
}
const Apple = () => {
  const data: TypeData[] = [
    {
      id:'1',
      name: "Apple",
      price: '33445',
      desc: "Apple is the most popular popular fruit",
      remaining: "05"
    },
    {
      id:'3',
      name: "apple T1",
      price: "2302",
      desc: "Apple is the most popular popular fruit",
      remaining: "05"
    },
    {
      id:'6',
      name: "orange",
      price: "1000",
      desc: "Apple is the most popular popular fruit",
      remaining: "05"
    },
  ];
  return (
    <section className="apple">
      <div className="container">
        <div className="fashion__heading">
          <h3>Apple watch</h3>
        </div>
        <div className="box_cards">
          {/* import data */}
          {data.map((e,i) => {
            return (
              <ItemProduct
               key={i}
              price={e.price}
              name={e.name}
              desc={e.desc}
              remaining={e.remaining}
              productId={e.id}
              />
            );
          })}
        </div>
      </div>
      <div className="see_more_wrapper">
        <div className="container">
          <a href="/category.html" className="see__more">
            {" "}
            See More{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apple;
