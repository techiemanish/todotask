import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div><Toaster
      position="top-center"
      reverseOrder={false}
    /></div>
    <Header/>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path= "*" element={<Home/>}/>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
