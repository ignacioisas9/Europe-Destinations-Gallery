import './App.css';
import { BrowserRouter as Router , Routes } from "react-router-dom";
import Barcelona from './components/Barcelona';
import London from './components/London';
import Paris from './components/Paris';
import Rome from './components/Rome';
import Athens from './components/Athens';
import Berlin from './components/Berlin';
import Amsterdam from './components/Amsterdam';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <Router>
      <div className='title'>
        <br/>
        <h1>Europe destinations</h1>
        <br/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='nav'>

        {/* Esta seccion de codigos no se que hace. Puede no estar y sigue siendo lo mismo. Falta la imagen principal, el curso debe estar desactualizado */}
        <Routes exact path='/Barcelona' element={Barcelona}/>
        <Routes path="/London" element={London}/>
        <Routes path="/Paris" element={Paris}/>
        <Routes path="/Roma" element={Rome}/>
        <Routes path="/Athens" element={Athens}/>
        <Routes path="/Berlin" element={Berlin}/>
        <Routes path="/Amsterdam" element={Amsterdam}/>

        <Navegacion/>
      </div>
    </Router>
  );
}

export default App;