import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from './redux/containers';

const routes = require('./config/routes.json');

class Routes extends Component { 
    route = ({ component, path }) => {
        const RouteComponent = Pages[component];
        return (
            <Route
                exact
                path={path}
                render={props => <RouteComponent {...props} />}
                page={component}
                key={component}
            />
        )
    }

    render() { 
      return ( 
         <Router> 
              <Switch>
                {Object.values(routes).map(routeData => this.route(routeData))}
              </Switch> 
         </Router> 
     ); 
    } 
  } 
    
  export default Routes; 