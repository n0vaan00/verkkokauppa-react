import axios from 'axios';
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
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState("");

    function changeAmount(e,product) {
        updateAmount(e.target.value,product);
    }

    function order(e) {
        e.preventdefault();
        const json = JSON.stringify({description:firstname,description:lastname,description:address,description:zip,description:city,description:phone,description:finished,description:cart})
        axios.post(URL + 'add.php',json,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            setTasks(tasks => [...tasks,response.data]);
            setTask('');
        }).catch (error => {
            alert(error.response.data.error)
        })
    }

    let sum = 0;

    if (finished === false) {
        return (
            <div>
                <h3 className="header">Ostoskori</h3>
                <table className="table">
                    <tbody>
                        {cart.map((product) => {
                            sum+=parseFloat(product.price * product.amount)
                            return (
                                <tr>
                                    <td style={{ width: '125px' }}>{product.name}</td>
                                    <td>{product.price} €</td>
                                    <td>
                                        <input
                                            style={{ width: '60px' }}
                                            type="number"
                                            step="1"
                                            onChange={e => changeAmount(e, product)}
                                            value={product.amount}
                                        />
                                    </td>
                                    <td><a href="#" onClick={() => removefromCart(product)}>Poista</a></td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td className="sumrow"></td>
                            <td className="sumrow">{sum.toFixed(2)}€</td>
                            <td className="sumrow"><a href="#" onClick={e => empty()}>Tyhjennä</a></td>
                        </tr>
                    </tbody>
                </table>
                {cart.length > 0 &&
                    <>
                        <h3 Classname="header">Asiakas tiedot</h3>
                        <form onSubmit={Order}>
                            <div className="form-group">
                                <label>Etunimi</label>
                                <input className="form-control" onChange={e => setFirstname(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label>Sukunimi</label>
                                <input className="form-control" onChange={e => setLastname(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label>Osoite</label>
                                <input className="form-control" onChange={e => setAddress(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label>Postinumero</label>
                            <input className="form-control" onChange={e => setZip(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Kaupunki</label>
                            <input className="form-control" onChange={e => setCity(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Puhelinnumero</label>
                            <input className="form-control" onChange={e => setPhone(e.target.value)}></input>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-primary">Tilaa</button>
                        </div>
                        </form>
                    </>
                }
            </div>
        )
    }
    else {
        return (<h3 style={{'padding-top': '100px'}}>Kiitokset tilauksestasi</h3>);
    }
}