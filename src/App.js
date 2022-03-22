import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
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
        </div>
      </body>
    </div>
  );
}

export default App;
