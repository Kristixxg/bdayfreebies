import "./App.css";
import Card from "./components/Card";
import Content from "./components/Content";
import Phone from "./components/Phone";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div
        id="bg"
        class="hidden justify-center text-container absolute sm:flex flex-col"
      >
        <h1>MOBILE</h1>
        <h1>APP</h1>
        <h1>ONLY</h1>
      </div>
      <div className="hidden w-full sm:flex justify-center items-center h-screen bg-black">
        <Phone />
      </div>
      <div className="sm:hidden">
        <Content />
      </div>
    </div>
  );
}

export default App;
