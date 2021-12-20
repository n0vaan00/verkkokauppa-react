import React from 'react'
import './infot.css';

export default function Infot() {
    return (
        <div style={{"padding-bottom":"10px", "padding": "50px"}}>
        <div style={{"background-color": "#253a35a2", "border-radius": "20px", "padding": "50px"}}>
            <div id="atte">
            <h3>Atte Hakalahti</h3>
            <h5>Käytetyt tunnit: 38h</h5>
            <ul>
                <li>Miten projekti eteni: Ihan jees.</li>
                <li>Mikä onnistui: Suunnittelimme kaiken hyvin etukäteen, kuten tapaamiset.</li>
                <li>Haasteita: Reactin ja PHP:n käyttö oli suhteellisen uutta.</li>
                <li>Tiimin toiminta: Yhteisen ajan löytäminen oli hankalaa aluksi. Muuten ihan hyvä.</li>
                <li>Mitä opit: PHP, React, Hacknplanin järkevää käyttöä.</li>
            </ul>
            </div>
            <div id="anu">
                <h3>Anu Väyrynen</h3>
                <h5>Käytetyt tunnit: 44h 30m</h5>
                <ul>
                    <li>Miten projekti eteni: Hitaasti, mutta varmasti</li>
                    <li>Mikä onnistui: Töiden suunnittelu ja suurin osa tarvittavista toiminnoista</li>
                    <li>Haasteita: Rekisteröitymisen saaminen käytettäväksi, kirjaa tietokantaan, muttei toimi oikein.</li>
                    <li>Tiimin toiminta: Yhteistä työskentelyaikaa tuntien ulkopuolella ei saatu aikaan, motivaatio loppu kesken.</li>
                    <li>Mitä opit: Hacknplanin käyttöä paremmin, php soveltamista ja reactin käyttöä.</li>
                </ul>
            </div>
            <div id="miika">
                <h3>Miika Pesonen</h3>
                <h5>Käytetyt tunnit: 33h</h5>
                <ul>
                    <li>Miten projekti eteni: Alun ongelmien jälkee ryhmätyö sujui ilman sen suurenpia pulmia </li>
                    <li>Mikä onnistui:Ehdimme saada suurimman osan toiminnoista käyttökuntoon </li>
                    <li>Haasteita: Kommunikaatiossa olisi voinut olla paramtamisen varaa</li>
                    <li>Tiimin toiminta:Kun löysimme yhdessä työskentely aikaa työskentelymme onnistui ryhmässä ongelmitta</li>
                    <li>Mitä opit: reactia, Hacknplania ja php:ta</li>
                </ul>
            </div>
            <div id="jaako">
                <h3>Jaako Taskila</h3>
                <h5>Käytetyt tunnit: 22h</h5>
                <ul>
                    <li>Miten projekti eteni: Hitaanpuoleisesti mutta tuli kuitenkin valmiiksi.</li>
                    <li>Mikä onnistui: Hacknplanin käyttö ja melkein kaikki tarvittavat toiminnot.</li>
                    <li>Haasteita: React oli aika haastavaa, motivaation kanssa oli ongelmia henkilökohtaisesti.</li>
                    <li>Tiimin toiminta: Pieniä ongelmia kommunikaatiossa mutta yleisesti mukava ilmapiiri ja tiimihenki.</li>
                    <li>Mitä opit: Hacknplanin käyttöä, Reactia, PHP:tä ja tiimityöskentelyä.</li>
                </ul>
            </div>
            <div id="yhteiset"></div>
        </div>
        </div>
    )
}
