import React from 'react';
import './Order.css';

export default function Order({cart,updateAmount,removefromCart}) {

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
    }
    return (
        <div style={{'padding-top': '100px'}}>
            <h3>Ostoskori</h3>
           <table>
            { cart.map((product) => {
                return(
                <tr>
                    <td style={{width: '125px'}}>{product.name}</td>
                    <td>{product.price} €</td>  
                    <td>
                        <input 
                        style={{width: '60px'}}
                        type="number" 
                        step="1"
                        onChange={e => changeAmount(e,product)}
                        value={product.amount}
                         />
                        </td>
                        <td><a href="#" onClick={() => removefromCart(product)}>Delete</a></td>
                </tr>
                );
            })}
            </table>
        </div>
    )
}
