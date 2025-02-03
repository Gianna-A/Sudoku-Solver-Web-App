//import logo from './logo.svg';
//import './App.css';
import Home from './pages/Home';
import Mypuzzlesdetail from './pages/Mypuzzlesdetail';
import Mypuzzles from './pages/Mypuzzles';
import Solvemypuzzle from './pages/Solvemypuzzle';
import Solveapuzzle from './pages/Solveapuzzle';
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return (
      <div>
      <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/*A specifc puzzle by a logged person, save progress by overwriting the temp-puzzle field.*/}
        <Route path="/Mypuzzles/:id" element={<Mypuzzlesdetail />} />
        {/*Solve a puzzle, you do it, if you click save, it checks if your logged in or not and adds to my puzzles. */}
        <Route path="/Solveapuzzle" element={<Solveapuzzle />} />
        {/* Solve my puzzle, will solve the puzzle based on my backtracking algorithm*/}
        <Route path="/Solvemypuzzle" element={<Solvemypuzzle />} />
        {/*Dashboard full of all users' puzzles, completed or not */}
        <Route path="/Mypuzzles/" element={<Mypuzzles />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
