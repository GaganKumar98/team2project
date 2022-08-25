
import './App.css';
import AddQnA from './Components/AddQnA';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
       
      </header>
      <Home/>
    </div>
  );
}

export default App;
