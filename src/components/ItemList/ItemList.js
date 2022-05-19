//*import {products} from "./components/Item/Item";*// deberia estar aca y no en app.js pero se me rompe todo
import {Card, Button} from 'react-bootstrap';
export default function ItemList ({products}) {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{products.title}</Card.Title>
    <Card.Text>
      <p>Stock: {products.stock}</p>
      <p>Precio: {products.price}</p>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    );

}