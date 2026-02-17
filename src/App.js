import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form2 from './components/form2';
import Home from './components/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/form1" element={<Home />} />
          <Route path="/form2" element={<Form2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
