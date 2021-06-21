import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import { AppBar, Tabs, Tab, TabPanel } from '@material-ui/core'

function App() {
  return (
    <div className="App">

      <AppBar position="static">
        <Tabs /*onChange={handleChange}*/ aria-label="simple tabs example" centered>
        <Link to='/' className="navLink"><Tab label="Home"/></Link>
        <Link to='/sign-up' className="navLink"><Tab label="Sign In"  /></Link>
        <Link to='/sign-in' className="navLink"><Tab label="Sign Up"  /></Link>
        <Link to='/classes' className="navLink"><Tab label="Classes"  /></Link>
        </Tabs>
      </AppBar>

      <header className="App-header">
        <h1>Anywhere Fitness</h1>
      </header>

      <Switch>
        <Route exact path='/'>
          {/* Home page component */}
        </Route>

        <Route exact path='/sign-up'>
          {/* Sign up component */}
        </Route>

        <Route exact path='sign-in'>
          {/* Sign in component */}
        </Route>

        <Route exact path='/classes'>
          {/* Classes component - only shown when logged in */}
        </Route>

      </Switch>
    </div>
  );
}

export default App;