import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./Pages/Main/Main";
import SettingRolex from "./Pages/SettingRolex/SettingRolex";
import FindRolex from "./Pages/FindRolex/FindRolex";
import Detail from "./Pages/Detail/Detail";
import Collection from "./Pages/Collection/Collection";
import CollectionDetail from "./Pages/CollectionDetail/CollectionDetail";
import MapRolex from "./Pages/MapRolex/MapRolex";
import SignIn from "./Pages/SignInNUp/SignIn";
import SignUp from "./Pages/SignInNUp/SignUp";
import TopNav from "./Components/TopNav/TopNav";
import Footer from "./Components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/settingrolex" component={SettingRolex} />
          <Route exact path="/findrolex" component={FindRolex} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/collection/detail" component={CollectionDetail} />
          <Route exact path="/maprolex" component={MapRolex} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
