import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import Context, { initialState } from "./context";
import reducer from "./reducer";
import Routes from "./Routes";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Routes />
    </Context.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
