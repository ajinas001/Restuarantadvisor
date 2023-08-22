import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Kannurdis from './pages/location/Kannurdis';
import Mra from './pages/hotel/mra/Mra';
import Randhal from './pages/hotel/randhal/Randhal';
import Loginpage from './pages/login/Loginpage';
import Addhotelpage from './pages/Addhotel/Addhotelpage';
import Admin from './pages/Admin/Admin';
import Mainhome from './pages/home/Mainhome';
import Hotelhomepage from './pages/hotelhomepage/Hotelhomepage';
import Userviewdetails from './pages/user/Userviewdetails';
import Admindistrict from './pages/Admin/Admindistrict';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/mainhome' element= {<Mainhome/>}></Route>
      <Route path='/admin' element= {<Admin/>}></Route>
      <Route path='/admin/location' element= {<Admindistrict/>}></Route>
      <Route path='/login' element= {<Loginpage/>}></Route>
      <Route path='/user' element= {<Home></Home>}></Route>
      <Route path='/user/viewdetails' element= {<Userviewdetails/>}></Route>
      <Route path='/hotelhome' element= {<Hotelhomepage/>}></Route>
      <Route path='/hotels/:district' element= {<Kannurdis></Kannurdis>}></Route>
      <Route path='/hotelhome/hoteldetails' element= {<Mra/>}></Route>
      <Route path='/hotelhome/addhotel' element= {<Addhotelpage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
