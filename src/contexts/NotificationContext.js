// Criar um context de notificações
import React, { useState, createContext } from "react";
import "../assets/notificacao.css";

export const NotificationContext = createContext({
  msg: "",
  setMsg(value) {}
});

export const NotificationContextProvider = ({ children }) => {
  const [msg, setMsg] = useState("");

  return (
    <NotificationContext.Provider value={{ msg, setMsg }}>
      {children}
      {msg && (
        <div className="notificacaoMsg" onAnimationEnd={() => setMsg("")}>
          {msg}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
