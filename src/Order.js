import React, { useState } from 'react';
import './Order.css';

export default function Order({cart,updateAmount,removefromCart,empty,url}) {

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [address,setAddress] = useState("");
    const [zip,setZip] = useState("");
    const [city,setCity] = useState("");
    const [phone,setPhone] = useState("");
    const [finished,setFinished] = useState(false);

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
    }
    return (
        <div>
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

    // if (finished === false) {
    //     return (
    //         <div>
    //             <h3>Order items</h3>
    //             <table>
    //                 <tbody>
    //                     {cart.map((product) => {
    //                         sum += parseFloat(product.price)
    //                         return (
    //                             <tr>
    //                                 <td>{product.name}</td>
    //                                 <td>{product.price} €</td>
    //                                 <td></td>
    //                             </tr>
    //                         )
    //                     })}
    //                     <tr>
    //                         <td className="sumrow"></td>
    //                         <td className="sumrow">{sum.toFixed(2)}€</td>
    //                         <td className="sumrow"><a href="#" onClick={e => empty()}>empty</a></td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //             {cart.length > 0 &&
    //                 <>
    //                     <h3 Classname="header">Asiakas tiedot</h3>
    //                     <form onSubmit={Order}>
    //                         <div className="form-group">
    //                             <label>Etunimi</label>
    //                             <input className="form-control" onChange={e => setFirstname(e.target.value)}></input>
    //                         </div>
    //                         <div className="form-group">
    //                             <label>Sukunimi</label>
    //                             <input className="form-control" onChange={e => setLastname(e.target.value)}></input>
    //                         </div>
    //                         <div className="form-group">
    //                             <label>Osoite</label>
    //                             <input className="form-control" onChange={e => setAddress(e.target.value)}></input>
    //                         </div>
    //                         <div className="form-group">
    //                             <label>Postinumero</label>
    //                             <input className="form-control" onChange={e => setZip(e.target.value)}></input>
    //                         </div>
    //                         <div className="form-group">
    //                             <label>Kaupunki</label>
    //                             <input className="form-control" onChange={e => setCity(e.target.value)}></input>
    //                         </div>
    //                         <div className="form-group">
    //                             <label>Puhelinnumero</label>
    //                             <input className="form-control" onChange={e => setPhone(e.target.value)}></input>
    //                         </div>
    //                     </form>
    //                 </>
    //             }
    //         </div>
    //     )
    // }
    // else {
    //     return (<h3 style={{'padding-top': '100px'}}>Kiitokset tilauksestasi</h3>);
    // }
}