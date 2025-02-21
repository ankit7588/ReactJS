import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };

  // actual change in theme

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    console.log("Theme updated to:", themeMode, "Classes:", html.className);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
