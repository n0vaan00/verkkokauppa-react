import React from "react";
import "./Product.css";

export default function Product({product,addToCart,url}) {
    
    return (
        
        <div id="tuotesivu">
            <div>
                <img id="kuva" src={url + 'images/' + product?.image} alt={product?.name}/>
            </div>
            <div id="otsikko">
                <p>{product?.name}</p>
            </div>
            <div id="teksti">
                <p>Tuotteen hinta: {product?.price}€</p>
            </div>
            <div id="teksti">
                <p>{product?.info}</p>
            </div>
            <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
    )
}