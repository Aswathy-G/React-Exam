import "./App.css";
import NavBar from "./components/includes/NavBar";
// import NavHeader from "./components/includes/NavHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/screens/Overview";
import TraderProfile from "./components/screens/TraderProfile";
import Echart from "./components/screens/Echart";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/traderprofile" element={<TraderProfile />} />
        <Route path="/echart" element={<Echart />} />
      </Routes>
    </Router>
  );
}

export default App;
