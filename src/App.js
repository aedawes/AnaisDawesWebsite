import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from './ThemeContext';
import ReactGA from 'react-ga4';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Avengineers from './Pages/Projects/Avengineers';
import Blazzi from './Pages/Projects/Blazzi';
import Portfolio from './Pages/Projects/Portfolio';
import ColorPalette from './Pages/Projects/ColorPalette';
import Set from './Pages/Projects/Set';
import Recipe from './Pages/Projects/Recipe';
import SetDemo from './Pages/Projects/ProjectDemos/SetDemo';
import RecipeDemo from './Pages/Projects/ProjectDemos/RecipeDemo';
import TodoTemplate from './Pages/Projects/TodoTemplate';
import TodoTemplateDemo from './Pages/Projects/ProjectDemos/TodoTemplateDemo';
import './CSS/Theme.css';

ReactGA.initialize('G-2XQ43TL3CR');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <ParallaxProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/projects/avengineers' element={<Avengineers />} />
              <Route path='/projects/blazzi' element={<Blazzi />} />
              <Route path='/projects/portfolio' element={<Portfolio />} />
              <Route path='/projects/todoTemplate' element={<TodoTemplate />} />
              <Route path='/projects/colorpalette' element={<ColorPalette />} />
              <Route path='/projects/set' element={<Set />} />
              <Route path='/projects/recipe' element={<Recipe />} />
              <Route path='/projects/SetDemo' element={<SetDemo />} />
              <Route path='/projects/RecipeDemo' element={<RecipeDemo />} />
              <Route path='/projects/TodoTemplateDemo' element={<TodoTemplateDemo />} />
            </Routes>
          </ParallaxProvider>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
