import React from "react";

export default function Product({product,addToCart}) {
    return (
        <div style={{'padding-top': '100px'}}>
            {product?.name}
            <button class="btn btn-primary" type="button" onClick={e => addToCart(product)}>Add to cart</button>
        </div>
    )
}