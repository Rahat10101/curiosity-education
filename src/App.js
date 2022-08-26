import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Blog from './Pages/Blog/Blog';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Notfound from './Pages/Notfound/Notfound';





function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
