import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home({url,category,addToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        if (category !== null) {
            axios.get(url + 'products/getproducts.php/' + category?.trnro)
            .then((response) => {
                const json = response.data;
                setProducts(json);
            }).catch (error => {
                if (error.response === undefined) {
                    alert(error);
                }else{
                    alert(error.response.data.error);
                }
            })
        }
    },[category])

    return (
        <div>
            <h3>{category?.trnimi}</h3>
            {products.map(product => (
                <div key={product.tuotenro}>
                    <Link
                        to={{
                            pathname: '/tuote',
                            state: {
                                trnro: product.trnro,
                                trnimi: product.trnimi,
                                hinta: product.hinta,
                            }
                        }}>
                        <p>{product.tuotenimi} {product.hinta}</p>
                        <img src={url + 'images/' + product.image} alt={product.name}></img>
                    </Link>
                </div>
            ))}
        </div>
    )
}
