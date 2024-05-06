import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Soda from './Soda';
import ChipsPage from './ChipsPage';
import Fish from './Fish';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/soda' element={<Soda/>}/>
          <Route path='/chips' element={<ChipsPage/>}/>
          <Route path='/sardines' element={<Fish/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
