import React from 'react'
import { Route, Switch } from 'react-router'
import { MainNavbar } from './components/Navbar'
import { LoginView, DashboardView } from './views'
import EnsureLoginStatus from './components/EnsureLoginStatus'
import { RouteBuilder } from './views/routes'

const App = () => (
  <Switch>
    <Route path="/login">
      <EnsureLoginStatus
        needsToBeLoggedIn={false}
        redirectRoute={{
          pathname: RouteBuilder.toDashboard(),
        }}>
        <LoginView />
      </EnsureLoginStatus>
    </Route>
    <Route path="/">
      <MainNavbar />
      <EnsureLoginStatus
        needsToBeLoggedIn={true}
        redirectRoute={{
          pathname: RouteBuilder.toLogin(),
        }}>
        <DashboardView />
      </EnsureLoginStatus>
    </Route>
  </Switch>
)

export default App
