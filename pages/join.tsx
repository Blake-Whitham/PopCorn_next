import Router from 'next/router';
import firebase from "firebase/app";
import { useState } from "react";

import clsx from 'clsx';
import { FormControl, FormHelperText, IconButton, InputLabel, InputAdornment, Input} from '@material-ui/core';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// init the connection to the firebase DB

import "firebase/auth";

import initFirebase from "../services/firebase";

initFirebase();



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
      marginTop: theme.spacing(3),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }),
);

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export default function ValidationTextFields() {
  const classes = useStyles();

  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div>
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="sign_in_email" shrink >email</InputLabel>
        <Input
          required
          id="sign_in_email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          // defaultValue="email@myEmail.com"
        />
        <FormHelperText id="sign_in_email-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="sign_in_password" shrink >password</InputLabel>
        <Input
          required
          id="sign_in_password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
    </div>
  );
}