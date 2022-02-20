import React from 'react'

import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100
    const publishableKey='pk_test_51KVK7BGOu7BssEvDOnTr4LBwwiNVHsMAuYogGultG51pLqkAHqOL4Tamh7gah3elovdMcqnlOvDtJvZDQSP9Cvzm0053hKur6m'

    const onToken=token=>{
        console.log(token);
        alert('Payment successfull!')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton