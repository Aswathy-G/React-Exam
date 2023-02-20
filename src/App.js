import "./App.css";
import NavBar from "./components/includes/NavBar";
// import NavHeader from "./components/includes/NavHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/screens/Overview";
import TraderProfile from "./components/screens/TraderProfile";
import Echart from "./components/screens/Echart";
import MailBox from "./components/screens/MailBox";
import Pages from "./components/screens/Pages";
import Support from "./components/screens/Support";
import Demo from "./components/screens/Demo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/traderprofile" element={<TraderProfile />} />
        <Route path="/echart" element={<Echart />} />
        <Route path="/mailbox" element={<MailBox />} />
        <Route Path="/pages" element={<Pages />} />
        <Route Path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
