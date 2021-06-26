import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import User from '../modules/User';
import Home from '../modules/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/User" component={User} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
