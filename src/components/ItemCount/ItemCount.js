import React from "react"
export default function ItemCount ({stock, initial, onAdd}) {
        const [count, setCount] = React.useState(initial);

        const sumar = () => {
            if(count < stock) {
                setCount(count + 1);
            }
        }

        const restar = () => {
            if(count > 0) {
                setCount(count - 1);
            }
        }

        const agregarCarrito = () => {
            setCount(initial);
            onAdd(count);
        }



        return (
            <div>
                <input type= "button" value="+"  onClick= {sumar} />
                {count}
                <input type= "button" value="-"  onClick= {restar} />
                
            
        
            </div>

    

)

        
    

}