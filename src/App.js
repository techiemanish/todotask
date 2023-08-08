import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path= "*" element={<Home/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/test' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
