
// React
import React from 'react'

// React Router
import { Route, IndexRoute } from 'react-router'

// Containers
import App from './containers/App'
import AsyncOAuth2 from './containers/AsyncOAuth2'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={AsyncOAuth2} />
  </Route>
)

export default routes