import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";


const CheckOutForm = () => {
    const [error,setError]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
    const [cart] = useCart();
    const totalPrice=cart.reduce((total ,item)=>total + item.price,0);

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price:totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })

    },[axiosSecure,totalPrice])

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card= elements.getElement(CardElement)

          if(card == null){
            return;
          }

          const {error,paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card
          })

          if(error){
            console.log('payment error',error);
            setError(error.message)
          }
          else{
            console.log('payment method',paymentMethod);
            setError('')
          }
    }

    return (
        <form onSubmit={handleSubmit}>
               <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-warning my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckOutForm;