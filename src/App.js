import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";

import H3 from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemCount stock="10" initial="0"/>
      <h1> Lorelai y Rory</h1>
      <H3 greeting={"Gracias por tu visita"} />
    </div>
    
  );
}

export default App;
