import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header";
import MyCard from "./MyCard";
import Footer from "./Footer";

import { Badge } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header header="Adopta un Perrito" />
      <div className="ordenCards">
        <MyCard
          titulo="Bartolo"
          descripcion="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          bg="success"
          raza="Husky"
          img="https://cdn.pixabay.com/photo/2017/01/04/02/38/dog-1951211_1280.jpg"
        />
        <MyCard
          titulo="Messi"
          descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales.¡Haz de Messi parte de tu familia hoy mismo!"
          bg="primary"
          raza="Bobtail"
          img="https://cdn.pixabay.com/photo/2017/08/01/09/04/dog-2563759_1280.jpg"
        />
        <MyCard
          titulo="Gohan"
          descripcion="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incodicional!"
          bg="danger"
          raza="Shar Pei"
          img="https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg"
        />
        <MyCard
          titulo="Princesa"
          descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          bg="warning"
          raza="Beagle"
          img="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
