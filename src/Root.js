import React, { Component, createContext, useContext } from "react";
import "./assets/bootstrap.min.css";
import {
  NotificationContextProvider,
  NotificationContext
} from "./contexts/NotificationContext";

// ContextAPI
const TemaContext = createContext("");

// [Quem quer o ${theme}]
const Card = ({ title }) => {
  const theme = useContext(TemaContext);
  return (
    <div className={`card`}>
      <NotificationContext.Consumer>
        {context => (
          <button onClick={() => context.setMsg("alo alo wbrazil")}>
            Dispara notificação
          </button>
        )}
      </NotificationContext.Consumer>
      <div className={`card-header bg-${theme} text-white`}>
        <h5>
          {title} {theme}
        </h5>
      </div>
      <img
        className="card-img-top"
        src="https://placehold.it/280x150"
        alt="Card cap"
      />
      <div className="card-body">
        <p className="card-text">lorem ipsum dolor sit amet bla aauh asuh</p>
        <a href="/" className={`btn btn-${theme}`}>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

// [Intermediário]
class HomePage extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          {["#01 - Card", "#02 - Card", "#03 - Card"].map(cardText => (
            <div className="col-6 mb-4" key={cardText}>
              <Card title={cardText} />
            </div>
          ))}
        </div>
      </main>
    );
  }
}

// [Componente Primário]
class Root extends Component {
  state = {
    theme: "primary"
  };

  render() {
    return (
      <NotificationContextProvider>
        <React.Fragment>
          <TemaContext.Provider value={this.state.theme}>
            <HomePage />
          </TemaContext.Provider>

          <select
            style={{
              position: "fixed",
              bottom: "5%",
              right: "5%",
              width: "250px",
              height: "50px"
            }}
            onChange={({ target }) => {
              this.setState({ theme: target.value });
            }}
          >
            <option value="primary">Azul</option>
            <option value="dark">Escuro</option>
            <option value="danger">Vermelho</option>
          </select>
        </React.Fragment>
      </NotificationContextProvider>
    );
  }
}

export default Root;
