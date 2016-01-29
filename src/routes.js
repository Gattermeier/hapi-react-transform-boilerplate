import React from 'react';
import App from './App';
import { Route, IndexRoute } from 'react-router';

const routes = (
   <Route path="/">
     <IndexRoute component={App}/>
   </Route>
 )
export default routes
