import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main'
import SettingRolex from './Pages/SettingRolex/SettingRolex'
import FindRolex from './Pages/FindRolex/FindRolex'
import Detail from './Pages/Detail/Detail'
import Collection from './Pages/Collection/Collection'
import MapRolex from './Pages/MapRolex/MapRolex'




class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/settingrolex' component={SettingRolex} />
          <Route exact path='/findrolex' component={FindRolex} />
          <Route exact path='/Detail' component={Detail} />
          <Route exact path='/collection' component={Collection} />
          <Route exact path='/maprolex' component={MapRolex} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;