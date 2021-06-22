import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import Login from '../views/auth/login';

// Used to connfigure application in a sub folder.
// Add this const on parammettter 'basename' in BrowserRouter component.
// Example: <BrowserRouter basename={basename}>
// const basename = window._env_.ROUTE_BASENAME || '/path';

const UnauthenticatedRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={ props => (
            <MainLayout component={<Component {...props} />} />
        )}
    />    
);

// const PrivateRoute = ({component: Component, ...rest}) =>(
//     <Route
//         {...rest}
//         render={props => 
//             isAuthenticated() ? (
//                 <DashboardLayout component={<Component {...props} />} />                    
//             ) : (
//                 <Redirect to={{pathname: `/`, state: {from: props.location}}} />
//             )
//         }
//     />
// );

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <UnauthenticatedRoute exact path='/' component={ () => <Login /> }/>
            <UnauthenticatedRoute exact path='/' component={ () => <h1>404 - Not Found</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;