import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import NavBar from './components/navbar/navbar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/detail/:id'>
          <ItemDetailContainer />
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;