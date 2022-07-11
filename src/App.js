
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import Login from "./Components/Login/Login";
import "./App.scss";
import FakeNews from "./Components/Game-components/Fake-news/Fake-news";
import Weapons from "./Components/Game-components/Weapons/Weapons";
import StolenGoods from "./Components/Game-components/Stolen-goods/Stolen-goods";
import Firewall from "./Components/Game-components/Firewall/Firewall";
import Drugs from "./Components/Game-components/Drugs/Drugs";
import About from "./Components/About-us/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/game-info" element={<Info />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/stolen" element={<StolenGoods/>}/>
        <Route path='/weapons' element={<Weapons/>}/>
        <Route path='/firewall' element={<Firewall/>}/>
        <Route path='/drugs' element={<Drugs/>}/>
        <Route path='/fake-news' element={<FakeNews/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      

    </>
  );
}

export default App;
