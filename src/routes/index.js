import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import User from '../modules/User';
import Home from '../modules/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/*" exact component={User} />
        <Route path="/*" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
