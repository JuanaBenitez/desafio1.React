import React from "react"
import {} from "react-bootstrap"

import CartWidget from "../CartWidget/CartWidget"

export default function Navbar () {

    const Button = ({texto}) => {
        return (
        <input type= "button" value={texto} />
        )
    }

    const menuStyle = {
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        background: "#929da8",
        padding: 10,
        fontWeight: "bolder",
        fontSize: 25
    }

    const logoStyle = {
        background: "#929da8",
        textAlign: "center",
        padding: 15,
        color: "black",
        fontWeight: "bolder",
        fontSize: 30
        
    }
    return (
        <header className="header">
            <div className="logo" style= {logoStyle}>Gilmore Girls</div>

        <ul className="Menu" style= {menuStyle}>
                        <li>Inicio</li>
                        <li>Temporadas</li>
                        <li>Accesorios</li>
                        <li>Mi Cuenta</li>


        </ul>


        <CartWidget/>

        <Button texto="Comprar"/>

        

        

        </header>

    )
}