import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const DefaultLayout = React.lazy(() => import('./components/Default'));
// const ErrorLayout = React.lazy(() => import('./error/error'));
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const Login = React.lazy(() => import('./containers/login'));
const ErrorLayout = React.lazy(() => import('./error/error'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

const routes = props => {
  console.log("###props",props.landingComp);
    // let landingComp = props.guest === true ? Login : Dashboard;
    // console.log("###landingComp",landingComp);
    return(
  <Router>
  
    {/* <React.Suspense fallback={loading()}> */}
    {/* <Switch> */}
      <Route path="/" exact component={props.landingComp} />
      <Route path="/login" exact component={Login} />
      {/* <Route path="/error" render={<ErrorLayout />} /> */}
      <Route path="/error" component={ErrorLayout} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
    {/* </Switch> */}
  {/* </React.Suspense> */}
 </Router>
);
  }

export default routes;
