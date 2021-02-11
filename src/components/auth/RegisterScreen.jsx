import React from 'react';
import { Link } from 'react-router-dom';
// import { useForm } from '../../hooks';

const RegisterScreen = () => {
    console.log('');
    return (
        <>
            <h3 className='auth__title'>Register</h3>
            <form>
                <input className='auth__input' type='text' placeholder='Name' name='name' autoComplete='off' />
                <input className='auth__input' type='text' placeholder='Email' name='email' autoComplete='off' />
                <input className='auth__input' type='password' placeholder='Password' name='password' />
                <input className='auth__input' type='password' placeholder='Confirm password' name='confirm' />
                <button className='btn btn-primary btn-block mb-5' type='submit'>
                    Login
                </button>
                <div className='auth__social-networks'>
                    <div className='google-btn'>
                        <div className='google-icon-wrapper'>
                            <img className='google-icon' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='google button' />
                        </div>
                        <p className='btn-text'>
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <div className='center'>
                    <p>Do you hace a account? &nbsp;</p>
                    <Link className='link' to='/auth/login'>
                        Login
                    </Link>
                </div>
            </form>
        </>
    );
};

export default RegisterScreen;
