
import {

  BrowserRouter,
  
  Route,
  
  Routes,
  
  //Link
  
  } from "react-router-dom";
  
  import LandingPage from './components/views/LandingPage/LandingPage'
  
  import LoginPage from './components/views/LoginPage/LoginPage'
  
  import RegisterPage from './components/views/RegisterPage/RegisterPage'
  
  import Auth from './hoc/auth'
  
  
  
  function App() {
  
  return (
  
   
  
  <BrowserRouter>
  
  
  
  <Routes>
  <Route exact path="/" component = {Auth(LandingPage, null)}/>

  
  <Route exact path="/login" component = {Auth(LoginPage, false)}/>
  
  <Route exact path="/register" component = {Auth(RegisterPage, false)}/>
  
  </Routes>
  
  </BrowserRouter>
  
  );
  
  }
  
  export default App;
