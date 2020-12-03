import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import NavBar from './components/navbar/navbar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './containers/CartContainer/Cart'
import { CartContext } from './Context/CartContext';


function App() {
  return (
    <CartContext.Provider>
    <BrowserRouter>

      <NavBar />

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/detail/:id'>
          <ItemDetailContainer />
        </Route>

        <Route exact path='/cart'>
          <Cart />
        </Route>

      </Switch>

    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;