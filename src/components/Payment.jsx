import React from 'react'
import '../css/Payment.css'

const Payment = () => {
  return (
    <div className='payment'>
    <div className='payment__conatiner'>
        <div className="payment__section">
            {/* this section is for to display delivery address */}
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>this is the delivery address</p>
            </div>

        </div>
        <div className="payment__section">
            {/* this section is for to display product which user is purchasing */}
        </div>
        <div className="payment__section">
             {/* this section is for to display payment method */}
        </div>
    </div>
    </div>
  )
}

export default Payment
