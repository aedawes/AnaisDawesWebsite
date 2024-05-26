import './CSS/App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <header className="App-header">
          <Home></Home>
        </header>
      </ParallaxProvider>
    </div>
  );
}

export default App;
