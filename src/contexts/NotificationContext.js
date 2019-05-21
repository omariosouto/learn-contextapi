// Criar um context de notificações
import React, { useState, createContext } from "react";
import "../assets/notification.css";

export const NotificationContext = createContext({
  msg: "",
  setMsg(value) {}
});

export const NotificationContextProvider = () => {
  const [msg, setMsg] = useState("");

  return (
    <NotificationContext.Provider value={{ msg, setMsg }}>
      {this.props.children}
      {this.state.msg && (
        <div className="notificacaoMsg" onAnimationEnd={this.clearMsg}>
          {this.state.msg}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
