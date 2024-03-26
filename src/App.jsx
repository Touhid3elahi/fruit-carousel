import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import your pages
import Home from './pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
