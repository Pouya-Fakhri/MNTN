import { useState } from "react";
import ContentContainer from "./components/ContentContainer";
import Header from "./components/Header";
import { createContext } from "react";

export const isDark = createContext();
function App() {
  const [mod, setMod] = useState(true);
  const modHandeler = ()=>{
    setMod(prive => !prive)
  }
  return (
    <main className={`${mod ? "bg-[#0B1D26]" : "bg-[#C1D8C3]"}  overflow-x-hidden`}>
      <isDark.Provider value={mod}>
        <Header handeler={modHandeler} />
        <ContentContainer />
      </isDark.Provider>
    </main>
  );
}

export default App;
