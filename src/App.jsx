import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div data-theme="dark">
      <Navbar />
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
