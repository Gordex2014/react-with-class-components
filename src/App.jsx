import React, { useState, useEffect } from "react";
import Title from "./components/Title";

function App() {
  const [mostrarTitulo, setMostrarTitulo] = useState(true);

  // Cuando el componente se monta esperamos 20 segundos para desmontar todo
  useEffect(() => {
    setTimeout(() => {
      setMostrarTitulo(false);
    }, 20000);
  }, []);

  return <div>{mostrarTitulo && <Title texto="este es un texto" />}</div>;
}

export default App;
