import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = (total + product.price);
    }

    let shipping = 0;
    if(total > 300){
        shipping = 0;
    }
    else if(total > 150){
        shipping = 7.99
    }
    else if(total > 50){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 9.99
    }
    const tax = (total / 10).toFixed(2);
const grandTotal = (total + shipping + Number(tax)).toFixed(2);

const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}


    return (
        <div>
            <h4>Order Summary</h4>
    <p>Items Ordered: {cart.length}</p>
    <p>Product Price: {formatNumber(total)}</p>
    <p><small>Shipping Cost: ${shipping}</small></p>
    <p><small>Tax + VAT: ${tax}</small></p>
    <p>Total Price: ${grandTotal}</p>    
        </div>
        
    );
};

export default Cart;