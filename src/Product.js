import React from "react";

export default function Product({product,addToCart,url}) {
    
    return (
        
        <div>
            {product?.name} 
            {product?.price}€
            <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
    )
}