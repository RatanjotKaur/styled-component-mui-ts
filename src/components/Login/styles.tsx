import styled from "styled-components"

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
width: 300px;
padding: 20px;
background-color: #f0f0f0;
border-radius: 8px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const InputField = styled.input`
margin-bottom: 10px;
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
`;
