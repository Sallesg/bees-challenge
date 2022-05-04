import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Breweries } from "./pages/Breweries/Breweries";
import { Home } from "./pages/Home/Home";
import { globalStyles } from "./GlobalCss";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";

export function App() {
  globalStyles();
  const [username, setUsername] = useState<string>("");

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{username, setUsername}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="breweries" element={<Breweries />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}
