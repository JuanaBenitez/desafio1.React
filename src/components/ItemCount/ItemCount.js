import React from "react"
export default function ItemCount ({stock, initial, onAdd}) {
        const [count, setCount] = React.useState(0)



return (
    <div>
        <input type= "button" value="+"  onClick= {() => setCount(count + 1)} />
        {count}
        <input type= "button" value="-"  onClick= {() => setCount(count - 1)} />
        
    

    </div>

    

)

        
    

}