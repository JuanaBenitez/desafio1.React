import ItemList from "../ItemList/ItemList"; //<ItemList/> no lo puedo poner dentro del div porque me saca todo y me tira error

export default function ItemListContainer ({greeting}) { 
    return (
        <div>
            
            <h3> {greeting} </h3>
        </div>
    );

}