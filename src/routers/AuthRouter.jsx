import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../components/auth';

const AuthRotuer = () => {
    console.log('');
    return (
        <div className='auth__main'>
            <div className='auth-box-container'>
                <Switch>
                    <Route exact path='/auth/login' component={LoginScreen} />
                    <Route exact path='/auth/register' component={RegisterScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
    );
};

export default AuthRotuer;
