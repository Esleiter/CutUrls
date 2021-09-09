import Cut from './cut';
import Redirect from './redirect';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Root = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Cut />
          </Route>
          <Route path="/:id">
            <Redirect />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Root;