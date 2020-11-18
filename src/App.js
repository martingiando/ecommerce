import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './containers/Home/Home'
import NavBar from './components/navbar/navbar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <>
    <NavBar />
    {/* <Home /> */}
    <ItemDetailContainer />
    </>
  );
}

export default App;