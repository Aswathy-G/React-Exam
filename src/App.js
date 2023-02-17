import "./App.css";
import NavBar from "./components/includes/NavBar";
import NavHeader from "./components/includes/NavHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/screens/Overview";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
