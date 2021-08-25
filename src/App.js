import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarTemplate from './components/Sidebar/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import ItemPage from './pages/ItemPage/ItemPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
function App() {
  return (
    <Router>
      <SidebarTemplate>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shirt'>
            <ItemPage title='Shirts List' type='shirt' />
          </Route>
          <Route path='/pants'>
            <ItemPage title='Pants List' type='pants' />
          </Route>
          <Route path='/shoes'>
            <ItemPage title='Shoes List' type='shoes' />
          </Route>
          <Route path='/success'>
            <SuccessPage />
          </Route>
        </Switch>
      </SidebarTemplate>
    </Router>
  );
}

export default App;
