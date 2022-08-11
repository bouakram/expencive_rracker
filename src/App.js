import './App.css';
import Header from './components/Header.jsx'
import Balanc from './components/Balanc.jsx'
import Incom from './components/Incom.jsx'
import Ternsaction from './components/Ternsaction.jsx'
import Add from './components/Add.jsx'
import {GlobaleProvider} from './Context/GlobalState.jsx'

function App() {
  return (
    <GlobaleProvider>   
    <div className="App">
    <Header /> 
    <div className='container'>
    <Balanc />
    <Incom />
    <Ternsaction />
    <Add />
    </div>
    </div>
    </GlobaleProvider>
  );
}

export default App;
