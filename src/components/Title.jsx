import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Este es el título",
      showTitle: true,
    };

    // this.handleMostrarTitulo = this.handleMostrarTitulo.bind(this);

    console.log("Se están preparando los atributos de clase");
  }

  // Se ejecuta solo una vez luego del primer render
  componentDidMount() {
    console.log("El primer render ya se realizó");
    setTimeout(() => {
      this.setState({
        title: "Otro titulo",
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("El componente se actualizó");
  }

  //   function componentWillUnmount() {}
  componentWillUnmount() {
    console.log("Se está desmontando el componente");
  }

  //   const handleMostrarTitulo = () => {}
  handleMostrarTitulo = () => {
    this.setState({
      showTitle: !this.state.showTitle,
    });
  };

  render() {
    console.log("Se está renderizando el componente");
    const { title, showTitle } = this.state;
    const { texto } = this.props;

    return (
      <div className="container">
        <div className="row">
          <h1>{showTitle && title}</h1>
          <p>{texto}</p>
          <button
            className="col-2 btn btn-success"
            onClick={this.handleMostrarTitulo}
          >
            Mostrar titulo
          </button>
        </div>
      </div>
    );
  }
}
