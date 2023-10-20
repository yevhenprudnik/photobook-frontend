import { useState } from 'react';
import Swal from 'sweetalert2';
import FromInput from '../../form-input/form-input.component';
import Button from '../../button/button.component';
import './sign-in.styles.scss';
import { api } from '../../../api/api';

const defaultFromValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formValues, setFormValues] = useState(defaultFromValues);
  const { email, password } = formValues;

  const handleChange = event => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await api.post('/auth/sign-in', {
        email,
        password,
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
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
