import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import PageHome from "./Pages/PrincipalHome/PageHome";
import SearchBar from "./Pages/SearchBar/SearchBar";
import PageLenguajes from "./Pages/PageLenguajes/PageLengaujes";
import PageProyects from "./Pages/PageProyects/PageProyects";


function App() {
  const {pathname} = useLocation();

  const search = pathname === "/";
  
  return (
    <div>
      {search ? null : <SearchBar/>}
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/Lenguajes" element={<PageLenguajes/>} />
        <Route path="/Proyects" element={<PageProyects />} />
      </Routes>
    </div>
  );
}

export default App;
