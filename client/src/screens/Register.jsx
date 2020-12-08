import { useState } from 'react';
import styled from 'styled-components';

const SignUpWrapper = styled.div``
const FormWrapper = styled.div`
  margin-top:50px;
`
const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Form = styled.form`
  padding: 20px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d8dee2;
  border-radius: 0 0 3px 3px;
`

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  display: block;
  width: 100%;
  min-height: 34px;
  padding: 6px 8px;
  font-size: 16px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
  width: 100%;
  box-sizing: border-box; /* add this */
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
`
const LoginButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  vertical-align: middle;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27,31,35,0.2);
  border-radius: 0.25em;
  width: 100%;
  box-sizing: border-box; /* add this */
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
`



export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <SignUpWrapper>
      <FormWrapper>
        <FormContainer>
    <Form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
      <h3>Register</h3>
      <label>Username:
        <Input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          />
      </label>
      <br />
      <label>Email:
        <Input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
      </label>
      <br />
      <label>Password:
        <Input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          />
      </label>
      <br />
      <LoginButton>Submit</LoginButton>
          </Form>
          </FormContainer>
        </FormWrapper>
          </SignUpWrapper>
  )
}