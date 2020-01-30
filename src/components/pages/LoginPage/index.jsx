import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginPage = () => (
  <div>
    <form name="form" onSubmit={this.handleSubmit}>
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
      <Button variant="contained" color="primary">
        Login
      </Button>
    </form>
  </div>
);

export default LoginPage;
