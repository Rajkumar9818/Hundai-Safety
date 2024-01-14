import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './UserLogin/Login';
import Home from './Home/Home';
import CreateUser from './User/CreateUser';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}>Login</Route>
        <Route path='/home'element={<Home></Home>}>Home</Route>
        <Route path='/create'element={<CreateUser></CreateUser>}>Home</Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
