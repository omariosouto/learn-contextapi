import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import Root from "./Root";

// useEffect(() => {
//     console.log('didMount')

//     return () => {
//         console.log('willUnmount')
//     }
// }, [])
// class Contador {
//   state = {
//     valorDoContador: 0
//   };
//   componentDidMount() {
//     console.log("didMount");
//   }

//   render() {
//     return (
//       <div>
//         Valor: {this.state.valorDoContador}
//         <button
//           onClick={() =>
//             this.setState({ valorDoContador: this.state.valorDoContador + 1 })
//           }
//         >
//           Incrementar
//         </button>
//       </div>
//     );
//   }
// }

const Contador = () => {
  const [valorDoContador, setValorDoContador] = useState(0);

  function fetchData() {
    setTimeout(() => {
      setValorDoContador(50);
    }, 10000);
  }

  // Usar lifecycle em componentes de função
  // https://github.com/acdlite/recompose
  // Ajuda quando vc precisa saber quando atualiza ou não um dado
  useEffect(() => {
    console.log("didMount");
    fetchData();

    return () => {
      console.log("willUnMount");
    };
  }, []);

  return (
    <div>
      Valor: {valorDoContador}
      <button onClick={() => setValorDoContador(valorDoContador + 1)}>
        Incrementar
      </button>
    </div>
  );
};

ReactDOM.render(<Contador />, document.getElementById("root"));
