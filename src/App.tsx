
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddQnA from './Components/AddQnA';
import { Error } from './Components/Error';
import Footer from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddQnA />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
