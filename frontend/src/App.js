import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './UserLogin/Login';
import Home from './Home/Home';
import CreateUser from './User/CreateUser';
import Updateuser from './User/Updateuser';
import Chart from './Dashbord/Chart';
import Dashbord from './Dashbord/Dashbord';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}>Login</Route>
        <Route path='/Home'element={<Home></Home>}>Home</Route>
        <Route path='/create'element={<CreateUser></CreateUser>}>Home</Route>
        <Route path='/edit/:id'element={<Updateuser></Updateuser>}>Home</Route>
        <Route path='/dashboard'element={<Dashbord></Dashbord>}>Chart</Route>
        
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
