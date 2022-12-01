import { useState } from "react";
import { Header } from "./components/Header";
import { Content } from "./GlobalStyles";
import { Router } from "./router/router";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content>
        <Router />
      </Content>
    </div>
  );
};
