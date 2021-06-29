import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import User from '../modules/User';
import Home from '../modules/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/*" exact component={User} />
      </Switch>
    </Router>
  );
};

export default Routes;
