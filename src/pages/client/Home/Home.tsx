import React from 'react'
import Trending from './pages/trending/Trending'
import Fashion from './pages/fashion/Fashion'
import Apple from './pages/Apple/Apple'
import ItemProduct from '../../../components/itemProduct/itemProduct'

const Home = () => {
  return (
    <main className="main">
   <Trending/>
    {/* <!-- fashion style --> */}
    <Fashion/>
    {/* <!-- apple watch  --> */}
    <Apple/>
    {/* <!-- section iphone --> */}
    <section className="apple iphone">
      <div className="container">
        <div className="fashion__heading">
          <h3>Iphone Model</h3>
        </div>
        <div className="box_cards">
          
          <ItemProduct productId='2' price={'22333'} name={'thanh'} desc="tuan titit" remaining="05"/>
          <ItemProduct productId='7' price={'22333'} name={'thanh'} desc="tuan titit" remaining="05"/>
          <ItemProduct price={'22333'} productId='30' name={'thanh'} desc="tuan titit" remaining="05"/>
          <ItemProduct price={'22333'} name={'thanh'} productId='09' desc="tuan titit" remaining="05"/>
        </div>
      </div>
      <div className="see_more_wrapper">
        <div className="container">
          <a href="/category.html" className="see__more"> See More </a>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Home