import { useState } from 'react';
import FromInput from '../../form-input/form-input.component';
import Button from '../../button/button.component';
import './sign-up.styles.scss';
import { api } from '../../../api/api';
import Swal from 'sweetalert2';

const defaultFromValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formValues, setFormValues] = useState(defaultFromValues);

  const { displayName, email, password, confirmPassword } = formValues;

  const handleChange = event => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'warning',
        text: 'Passwords should match!',
      });

      return;
    }

    try {
      const { data } = await api.post('/auth/sign-up', {
        email,
        password,
        username: displayName,
      });

      const { accessToken, refreshToken } = data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      setFormValues(defaultFromValues);
    } catch (error) {
      if (error.response) {
        if (error.response.data?.message) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
          });
        }
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FromInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FromInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FromInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FromInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
