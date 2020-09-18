import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { newContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(newContext)
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser.email || loggedInUser.name? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;