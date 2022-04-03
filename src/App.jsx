import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="sections">
        <Home />
      </div>
    </div>
  );
}

export default App;
