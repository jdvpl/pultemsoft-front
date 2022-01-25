import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Registro from './components/Registro';
function App() {
  return (
    <div >
  <Router>
    <Switch>
      <Route exact path="/"><Login/></Route>
      <Route exact path="/register"><Registro/></Route>
    </Switch>
</Router>
</div>
  );
}
export default App;
