import React, { useState, useEffect, useLayoutEffect } from "react";

const Title2 = (props) => {
  const [titulo, setTitulo] = useState("Este es mi título");
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTitulo("Otro título");
    }, 2000);
    return () => {
      console.log("Se está desmontando el componente");
    };
  }, []);

  // La diferencia del useLayoutEffect es que este se solo cuando el render se realiza
  // en este caso estando pendiente de la variable titulo
  useLayoutEffect(() => {
    console.log("El componente se actualizó cuando titulo cambió");
  }, [titulo]);

  // useEffect(() => {
  //   console.log("El componente se actualizó cuando titulo cambió");
  // }, [titulo]);

  const handleMostrarTitulo = () => {
    setNumero(numero + 1);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>{titulo}</h1>
        <button className="col-2 btn btn-success" onClick={handleMostrarTitulo}>
          Mostrar titulo
        </button>
      </div>
    </div>
  );
};

export default Title2;
