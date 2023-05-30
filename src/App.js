import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer} from "./components/footer/Footer";
import { Publication, PublicationDetails } from './components/publication';

function App() {
  return <>
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Publication /> } />
        <Route path='publication/detail/:id' element={<PublicationDetails /> } />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>;
}

export default App;
