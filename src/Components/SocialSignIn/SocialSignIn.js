import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';

import google from './google.svg';



const SocialSignIn = () => {
    const [signInWithGoogle, user, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (googleLoading) {
        return <Loading></Loading>
    }

    if (googleError) {
        errorElement = <div>
            <h5 className='text-danger'>Error: {googleError?.message}</h5>
        </div>
        
    }
    
    if (user ) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            <p className='mt-2 px-3'>or</p>
            <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=>signInWithGoogle()} className='btn btn-outline-dark w-100'><img src={google} width={34} alt="" /> Google Sign In</button>
                
            </div>
        </div>
    );
};

export default SocialSignIn;