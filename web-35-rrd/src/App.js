import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Contact from './screens/Contact';
import Detail from './screens/Detail';
import Home from './screens/Home';

function App() {



  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/details/:itemId' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
