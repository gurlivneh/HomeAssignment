import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from "../screens/Main";
import Favorites from "../screens/Favorites";

const MyRouter = () => {

  return (

    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
       <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </div>
  </Router>

  )

}

export default MyRouter