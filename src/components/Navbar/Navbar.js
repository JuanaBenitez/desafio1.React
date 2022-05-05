import CartWidget from "../CartWidget/CartWidget"
export default function Navbar () {

    const menuStyle = {
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        background: "grey",
        padding: 10,
        fontWeight: "bolder",
        fontSize: 25
    }

    const logoStyle = {
        background: "#9B9A9A",
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

        <CartWidget count={5}/>

        </header>

    )
}