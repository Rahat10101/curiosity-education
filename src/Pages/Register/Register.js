import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import Loading from '../../Shared/Loading/Loading';
import auth from '../../firebase/firebase.init';
import SocialSignin from '../../Components/SocialSignIn/SocialSignIn';

const Register = () => {
  const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateEerror] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
  }
  
  if (loading || updating) {
    return <Loading></Loading>
}

  if (user) {
    console.log('user', user);
  }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
      
      
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
        
    }
    return (
        <div className='container w-50 my-4'>
            <h2 className='text-center text-dark mb-4'>Please Register</h2>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-4" controlId="formBasicName">
    {/* <Form.Label>Your name</Form.Label> */}
    <Form.Control type="text" name='text' placeholder="Enter your name" required/>
  </Form.Group>
  <Form.Group className="mb-4" controlId="formBasicEmail">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" className={agree ? 'text-primary' : 'text-danger'} label="Accept Tearms and condition" />
  </Form.Group>
  <Button disabled={!agree} className='w-50 d-block mx-auto mb-2' variant="dark" type="submit">
    Register
  </Button>
            </Form>
        <h6 className='mt-3'>Already have an account ?<Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></h6>
        <SocialSignin></SocialSignin>
        </div>
    );
};

export default Register;