import './App.css';
import Menu from './components/navbar/navbar'
import Greeting from './components/home/greeting'
import Contador from './components/counter/counter'
import ItemList from './components/ItemList/ItemList'
import { BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Menu />
    <Greeting greeting="¡Bienvenidos a Game Masters!" />
    {/* <Contador initialValue={0} maxValue={20} onAdd={ () => {console.log('pasaron cosas')}}/> */}
    <ItemList />
    </>
  );
}

export default App;
