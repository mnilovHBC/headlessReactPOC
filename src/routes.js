import React from 'react'
import { Route, IndexRoute } from 'react-router'

import NewLayout from './components/NewLayout';

import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={NewLayout}>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
