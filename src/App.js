import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import CreatePOST from './pages/createpost';
import Post from './pages/Post';
import Registration from "./pages/Registration";
import Login from "./pages/Login";


function App() {

  return (
    <div className="App">
      <Router>
        <div className='navbar'>
        <Link to="/"><button id="buttonHome">Strona główna<br /></button></Link>
        <Link to="/registration"><button id="buttonReg">Załóż konto<br /></button></Link>
        <Link to="/login"><button id="buttonLogin">Zaloguj się<br /></button></Link>
        <Link to="/createpost"><button id="buttonCreatePost">Dodaj POST<br /></button></Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createpost" exact element={<CreatePOST />} />
          <Route path="/post/:id" exact element={<Post />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
