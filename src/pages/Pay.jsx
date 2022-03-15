import axios from 'axios';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';


const Pay = () => {
  const [token, setstripeToken] = useState(null);
  const [ amount, setAmount ] = useState(100);
  const onToken = (token) => {
    
     setstripeToken(token);
  };

   useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
              token:token,
              amount:amount,
              // body: JSON.stringify({ token, amount }),
            },{
            headers:{'Content-Type': 'application/json'}
          });
        console.log(res.data);
      } catch (err) {
          console.log(err);
      }
    };

    token && makeRequest()

  }, [amount, token]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StripeCheckout
        // ==========================================================
        stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
        name="Three Comma Co." // the pop-in header title
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
        billingAddress
        shippingAddress
        description="Big Data Stuff" // the pop-in header subtitle
        amount={amount} //cent
        token={onToken} // submit callback
        email="info@vidhub.co"
         currency="USD"

        // ==========================================================
      >
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
