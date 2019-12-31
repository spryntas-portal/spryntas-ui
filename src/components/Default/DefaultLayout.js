import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
// import routes from '../../routes';
// import Routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const RouterMenu = React.lazy(() => import('./../../routes'));
const Login = React.lazy(() => import('../../containers/login'));
// const ErrorLayout = React.lazy(() => import('../../error/error'));
const Dashboard = React.lazy(() => import('../../components/Dashboard'));

class DefaultLayout extends Component {
  state = {
    guestUser:true,
}
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    const { guestUser } = this.state;
    let landingComp = guestUser === false ? Dashboard : Login;
    return (
      <div className="app">
         { !guestUser &&
          <AppHeader fixed>
            <Suspense  fallback={this.loading()}>
              <DefaultHeader onLogout={e=>this.signOut(e)}/>
            </Suspense>
          </AppHeader>
        }
       <div className="app-body">
       { !guestUser &&
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            {/* <AppSidebarNav navConfig={navigation} {...this.props} router={router}/> */}
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
        }
          <main className="main">
          { guestUser === false ?
            <React.Fragment>
              <Container fluid>
              {/* <Switch> */}
                  {/* <Route path="/" exact component={Login} />
                {/* <Route path="/error" render={<ErrorLayout />} /> */}
                {/* <Route path="/error" component={ErrorLayout} />
                <Route path="/dashboard" component={Dashboard} /> */}
                <RouterMenu 
                   landingComp={ landingComp }
                />
            {/* </Switch> */}
            {/* <AppBreadcrumb appRoutes={routes} router={router}/> */}
            </Container>
            </React.Fragment> 
            :
            <React.Fragment> 
              <Container fluid>
                <Route path="/" component={Login} />
                {/* <Redirect from="/" to="login" /> */}
              </Container>
            </React.Fragment> 
          }
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
