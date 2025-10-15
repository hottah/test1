import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import GithubCorner from './components/GithubCorner';

export default function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1 className="logo">Test1</h1>
        <nav>
          <NavLink to="/" end className="nav" activeclassname="active">Home</NavLink>
          <NavLink to="/about" className="nav" activeclassname="active">About</NavLink>
          <NavLink to="/works" className="nav" activeclassname="active">Works</NavLink>
          <GithubCorner repoUrl="https://github.com/hottah/test1" />
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          {/* 404相当（未定義パス） */}
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} hottah</footer>
    </div>
  );
}
