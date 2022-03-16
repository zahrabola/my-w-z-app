import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather react Search Engine </h1>
        <p>Zahra Olanrewaju -</p>
        <Weather defaultcity="London" />
      </header>
    </div>
  );
}

export default App;
