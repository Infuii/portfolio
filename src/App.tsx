import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useTheme } from "./hook/theme";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-gray-200 dark:bg-[#252525]">
      <Navbar />
    </div>
  );
}

export default App;
