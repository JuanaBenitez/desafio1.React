export default function Navbar () {

    const menuStyle = {
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        background: "grey",
        padding: 10,
        fontWeight: "bolder",
        fontSize: 15
    }

    const logoStyle = {
        background: "#9B9A9A",
        textAlign: "center",
        padding: 15,
        color: "pink",
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

        </header>

    );
}