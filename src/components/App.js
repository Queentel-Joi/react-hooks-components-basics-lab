import React from "react";

// ✅ NavBar component
function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

// ✅ Home component — has id="home"
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// ✅ About component — must have id="about"
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// ✅ App renders all 3 components
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;


