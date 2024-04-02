import logo from "./logo.svg";
import dog1 from "./assets/imgs/dog1.jpg"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dog1} className="App-logo" alt="logo" />
        <p>Hola. Soy Johana.</p>
        <p>Responde correctamente y encontrarás una sorpresa al final. </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
