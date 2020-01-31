import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function LoginForm({ onSubmit }) {
  const {
    register, handleSubmit, errors,
  } = useForm();

  const onSubmitClick = (data, e) => {
    e.target.reset();
    onSubmit(data);
  };

  return (
    <form name="form" onSubmit={handleSubmit(onSubmitClick)}>
      <Typography variant="h6">
        Login
      </Typography>
      <Typography variant="body1">
        Email
      </Typography>
      <TextField
        id="email-address"
        name="emailAddress"
        required
        inputRef={register({
          required: true,
          pattern: /\S+@\S+\.\S+/,
        })}
        error={!!errors.emailAddress}
        helperText={
          errors.emailAddress && 'Valid UCSD email address is required.'
        }
      />
      <Typography variant="body2">
        Password
      </Typography>
      <TextField
        id="password"
        name="password"
        type="password"
        required
        inputRef={register({
          required: true,
        })}
        error={!!errors.password}
        helperText={
          errors.password && 'Password is required.'
        }
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: undefined,
};

export default LoginForm;
