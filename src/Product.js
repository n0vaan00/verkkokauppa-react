import React from "react";

export default function Product({product,addToCart,url}) {
    
    return (
        
        <div>
            <p>{product?.name}</p> 
            <p>{product?.price}€</p>
            <p>{product?.info}</p>
            <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
    )
}