import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { Header } from "./components/header/Header";
import { Publication } from './components/publication';

function App() {
  return <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Publication /> } />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
