import "./App.css";
import Card from "./components/Card";
import Phone from "./components/Phone";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div id="bg" class="justify-center text-container absolute flex flex-col">
        <h1>MOBILE</h1>
        <h1>APP</h1>
        <h1>ONLY</h1>
      </div>
      <div className="w-full flex justify-center items-center h-screen bg-black">
        <Phone />
      </div>
    </div>
  );
}

export default App;
