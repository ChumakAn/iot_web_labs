import React from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from '../firebase';

export interface AuthRouteProps { }

export const AuthRoute: React.FunctionComponent<AuthRouteProps> = props => {
    const { children } = props;

    if(!auth.currentUser) {
        console.log('no user detected, redirecting');
        return <Redirect to="/login"/>
    }

    return (
        <div>{children}</div>
    );
}