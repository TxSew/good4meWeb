import React from 'react'
import './style.scss'
function Cart() {
  return (
  <div>
  <main className="main_mycard">
    <div className="container_fluid">
      <div className="mycard">
        <div className="mycard_heading">
          <h3>My card</h3>
          <span className="number_productCard">08 products</span>
        </div>
        <div className="mycard_wrapper">
          {/* item card */}
          <div className="mycard_items">
          </div>
          {/* order information */} 
          <div className="mycard_infomation">
            <h3>Order information</h3>
            <div className="mycard_infomation-content">
              <div className="total_amount">
                <span className="key_total_amount">
                  Total amount:
                </span>
                <span className="total_amount_value">
                  $24000
                </span>
              </div>
              <div className="total_amount">
                <span className="key_total_amount">
                  Discount:
                </span>
                <span className="total_amount_value">
                  $0
                </span>
              </div>
              <div className="total_amount">
                <span className="key_total_amount">
                  Total:
                </span>
                <span className="total_amount_value">
                  $24000
                </span>
              </div>
            </div>
            <div className="note_infomation">
              <span>Note</span>
              <textarea  cols={30} rows={10} defaultValue={""} />
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

  )
}

export default Cart