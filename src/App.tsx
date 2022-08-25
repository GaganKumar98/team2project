import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddQnA from "./Components/AddQnA";
import { Error } from "./Components/Error";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Header setSearchTerm={setSearchTerm} />
      </header>
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/add" element={<AddQnA />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
