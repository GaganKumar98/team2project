
import './App.css';
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
