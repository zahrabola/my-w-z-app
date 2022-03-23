import "./App.css";
import Weather from "./Weather";
import { useContext } from "react";
import { ThemeContext } from "./theme";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      {" "}
      <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <header className="App-header">
        <h1> Weather react Search Engine </h1>
        <Weather defaultcity="London" />
      </header>
      <body>
        <div className="link">
          <p>Coded by Zahra Olanrewaju</p>
          <a href="https://github.com/zahrabola/my-w-z-app">
            Open sourece Github
          </a>
          <p>and hosted on Netlify</p>
        </div>
      </body>
    </div>
  );
};

export default App;
