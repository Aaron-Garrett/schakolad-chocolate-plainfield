import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <Router basename="/schakolad-chocolate-plainfield">
      <div className="App">
        <Routes>
          <Route path="" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/chocolate-facts" element={<ChocolateFacts />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
