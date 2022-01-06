import logo from './logo.svg';
import './App.css';
import GetData from './component/GetData';
import Navbar from './component/Navbar';
import PostData from './component/PostData';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
function App() {
  
  return (
    <div >
     
      <Router>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/getdata' element={<GetData/>}/>
        <Route path='/postdata' element={<PostData/>}/>
      </Routes>
      </Router>
    </div>
  );
  }
export default App;
