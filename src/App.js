import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Publication, PublicationDetails } from './components/publication';
import { UserForm } from './components/user/UserForm';
import { LoginForm } from './components/login/Login';
import { InmuebleDashboard, InmuebleForm } from './components/inmueble';

function App() {
  return <>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Publication />} />
        <Route path='publication/detail/:id' element={<PublicationDetails />} />
        <Route path='singup' element={<UserForm />} />
        <Route path='singin' element={<LoginForm />} />
        <Route path='inmueble/create' element={<InmuebleForm />} />
        <Route path='inmueble' element={<InmuebleDashboard />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>;
}

export default App;
