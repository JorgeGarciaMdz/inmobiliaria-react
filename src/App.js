import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Header } from "./components/header/Header";

function App() {
  return <>
    <Header />
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
