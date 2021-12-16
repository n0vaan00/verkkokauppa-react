import React, { useState } from 'react'
import './Order.css'

export default function Order ({cart, updateAmount, removefromCart, empty, url}) {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [finished, setFinished] = useState(false);

  function changeAmount (e, product) {
    updateAmount(e.target.value, product)
  }

  function order (e) {
      
    e.preventDefault();
    fetch(url + 'order/add.php',{
        method: 'POST',
        header: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            firstname:firstname,
            lastname: lastname,
            address: address,
            zip:zip,
            city:city,
            phone:phone,
            cart:cart,
        })
    })
    .then (res => {
        return res.json();
    })
    .then (
        (res) => {
            empty();
            setFinished(true);
        }, (error) => {
            alert(error);
        }
    )
  }

  let sum = 0

  if (finished === false) {
    return (
        <div style={{display:'inline-block'}}>
            <div className='rivi'>
                <h3 className='header'>Ostoskori</h3>
                <table className='table'>
                    <tbody>
                        {cart.map(product => {
                            sum += parseFloat(product.price * product.amount)
                            return (
                                <tr>
                                    <td style={{ width: '125px' }}>{product.name}</td>
                                    <td>{product.price} €</td>
                                    <td>
                                        <input
                                            style={{ width: '60px' }}
                                            type='number'
                                            step='1'
                                            onChange={e => changeAmount(e, product)}
                                            value={product.amount}
                                        />
                                    </td>
                                    <td>
                                        <a
                                            href='#'
                                            onClick={() => removefromCart(product)}
                                            style={{ color: 'white' }}
                                        >
                                            Poista
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td className='sumrow'></td>
                            <td className='sumrow'>{sum.toFixed(2)}€</td>
                            <td className='sumrow'>
                                <a href='#' onClick={e => empty()} style={{ color: 'white' }}>
                                    Tyhjennä
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='rivi'>
                {cart.length > 0 && (
                    <>
                        <h3 Classname='header'>Asiakas tiedot</h3>
                        <form onSubmit={order}>
                            <div className='form-group'>
                                <label>Etunimi</label>
                                <input className='form-control' onChange={e => setFirstname(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Sukunimi</label>
                                <input  className='form-control' onChange={e => setLastname(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Osoite</label>
                                <input className='form-control' onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Postinumero</label>
                                <input className='form-control' onChange={e => setZip(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Kaupunki</label>
                                <input className='form-control' onChange={e => setCity(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Puhelinnumero</label>
                                <input className='form-control' onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className='buttons'>
                                <button className='btn btn-primary'>Tilaa</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
  } else {
    return (<div  style={{ 'padding': '200px', 'padding-bottom': '400px'}}><h3>Paitaässä kiittää tilauksestasi!!!</h3></div>);
  }
}
