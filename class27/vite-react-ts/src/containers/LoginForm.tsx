import React, { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import TextField from '../components/TextField';
import '../styles/loginForm.css';

/* 
We have here a simple Login form component as we did before on our javascript app

*/
const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Logging in with username: ${username} and password: ${password}`);
    };

    return (
        <Form>
            <main className='main'>
                <h1 className="h1">Login</h1>
                <section className="input-section">
                    <TextField
                        value={username}
                        onChange={setUsername}
                        title="Username"
                        placeholder="Enter your username"
                    />
                    <TextField
                        value={password}
                        onChange={setPassword}
                        title="Password"
                        placeholder="Enter your password"
                    />
                </section>
                <Button onClick={handleLogin} text="Login" />
            </main>

        </Form>
    );
};

export default LoginForm;
