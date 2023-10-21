import React from 'react'

const Card = () => {
  return (
    <div>
        <h2 className='card-heading'>Card Details</h2>
        <div className="form">
            <form action="" style={{width:"100%"}}>
            <label htmlFor="CardDetails">Card Number</label><br />
            <input type="text" name='CardDetails'/><br />
            <label htmlFor="Expiry">Expiry</label><br />
            <input type="text" name='Expiry'/><br />
            <label htmlFor="CVV">CVV</label><br />
            <input type="text" name='CVV'/><br />
            <button className='btn-grad' style={{width:"90%", height:"10vh", background:"#e8006f", color: "white", fontWeight:"600", color:"white"}}>Pay $999 </button>
            </form>

        </div>
    </div>
  )
}

export default Card
