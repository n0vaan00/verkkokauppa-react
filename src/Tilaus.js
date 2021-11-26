import React from 'react';
import './Tilaus.css';

export default function Tilaus({cart,updateAmount}) {

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
                    <td>{product.tuotenimi}</td>
                    <td>{product.hinta} €</td>  
                    <td>
                        <input 
                        style={{width: '45px'}}
                        type="number" 
                        step="1"
                        onChange={e => changeAmount(e,product)}
                        value={product.amount}
                         />
                        </td>
                </tr>
                );
            })}
            </table>
        </div>
    )
}
