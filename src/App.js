
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Info from "./Components/Info/Info";
import Login from "./Components/Login/Login";
import "./App.scss";
import FakeNews from "./Components/Game-components/Fake-news/Fake-news";
import Weapons from "./Components/Game-components/Weapons/Weapons";
import StolenGoods from "./Components/Game-components/Stolen-goods/Stolen-goods";

function App() {
  return (
    <>
    <FakeNews/>
      {/* <Weapons/>
      <Routes>
        <Route path="/game-info" element={<Info />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/stolen" element={<StolenGoods/>}/>
        <Route path='/weapons' element={<Weapons/>}/>
      </Routes> */}
    </>
  );
}

export default App;
