import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddQnA from "./Components/AddQnA";
import { Error } from "./Components/Error";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Results from "./Components/Results";
import Test from "./Components/Test";
import { Home } from "./Components/Home";
import { useFetchData } from "./Components/useFetchData";
import { Details } from "./Components/Details";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  let { transformedData, kFetch, setTransformedData } = useFetchData();

  return (
    <div className="App">
      <header className="App-header">
        <Header
          transformedData={transformedData}
          kFetch={kFetch}
          setTransformedData={setTransformedData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </header>
      <Routes>
        <Route
          path="/"
          element={<Home transformedData={transformedData} kFetch={kFetch} />}
        />
        <Route path="/results" element={<Results searchTerm={searchTerm} />} />
        <Route path="/add" element={<AddQnA />} />
        <Route path="*" element={<Error />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
