import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = ({ handleSubmit }) => (
  <form name="form" onSubmit={handleSubmit}>
    <Typography variant="h6">
      Login
    </Typography>
    <Typography variant="body1">
      Email
    </Typography>
    <TextField
      required
      id="email-address"
    />
    <Typography variant="body2">
      Password
    </Typography>
    <TextField
      required
      id="password"
      type="password"
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  handleSubmit: undefined,
};

export default LoginForm;
