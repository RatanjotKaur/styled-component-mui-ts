import React, { useState } from 'react';
import {LoginContainer, LoginForm, InputField} from './styles';
import { SubmitButton  } from '../../styles/global'; 

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      // Add your login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </LoginForm>
      </LoginContainer>
    );
  };
  
  export default Login;
  