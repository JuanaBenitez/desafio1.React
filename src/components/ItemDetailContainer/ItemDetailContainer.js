export default function ItemDetailContainer ({getItem}) {
    const [items, setItems] = React.useState([])

    const getItem = new Promise ((resolve, reject) => {
        resolve()
    }).then(() => {
        console.log("getitem")

    })
}