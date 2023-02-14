import { useState } from "react";
import "./App.css";
import { useTheme } from "./hook/theme";
import Navbar from "./components/Navbar";
import About from "./components/About/About";

function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-gray-200 dark:bg-[#252525]">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
