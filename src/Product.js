import React from "react";
import "./Product.css";

export default function Product({product,addToCart,url}) {
    
    return (
    <div style={{"padding":"10px"}}>
        <div class="container" id="tuotesivu">
            <div class="row">
                <div class="col-5" id="kuva">
                    <img src={url + 'images/' + product?.image} alt={product?.name}/>
                </div>
                <div class="col-2" id="otsikko">
                    <p>{product?.name}</p>
                </div>
                <div class="col-4" id="teksti">
                    <p>Tuotteen hinta: {product?.price}€</p>
                </div>
                <div class="col-12" id="teksti">
                    <p>{product?.info}</p>
                </div>
            </div> 
            <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
    </div> 
    )
}