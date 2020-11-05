import logo from './logo.svg';
import './App.css';
import Menu from './components/navbar/navbar'
import Greeting from './components/greeting/greeting'

function App() {
  return (
    <>
    <Menu />
    <Greeting greeting="¡Bienvenidos a Game Masters!" />
    </>
  );
}

export default App;
