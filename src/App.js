import "./App.css";
import NavBar from "./components/includes/NavBar";
// import NavHeader from "./components/includes/NavHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Overview from "./components/screens/Overview";
import TraderProfile from "./components/screens/TraderProfile";
import Echart from "./components/screens/Echart";
import MailBox from "./components/screens/MailBox";
import Demo from "./components/screens/Demo";
import Header from "./components/includes/Header";
import styled from "styled-components";
import Setting from "./components/screens/Setting";
import Pages from "./components/screens/Pages";
import Support from "./components/screens/Support";

function App() {
  return (
    <Router>
      <Header />
      <Conatiner>
        <NavBar />
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/traderprofile" element={<TraderProfile />} />
          <Route path="/echart" element={<Echart />} />
          <Route path="/mailbox" element={<MailBox />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Conatiner>
    </Router>
  );
}

export default App;

const Conatiner = styled.div`
  display: flex;
  /* justify-content: space-between; */
  background: #13181e;
`;
