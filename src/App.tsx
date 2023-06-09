import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./pages/Loader";
import Home from "./pages/Home";
import Message from "./pages/Message";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[black] text-[white] lg:flex items-center justify-center text-[20px] syneFont hidden ">
        Please Use a smaller device to view the site
      </div>
      <div className="block lg:hidden">
      <Routes key={location.pathname} location={location}>
        <Route path="/" Component={Loader} />
        <Route path="/home" Component={Home} />
        <Route path="/message" Component={Message} />
      </Routes>
      </div>
    </>
  );
}

export default App;
