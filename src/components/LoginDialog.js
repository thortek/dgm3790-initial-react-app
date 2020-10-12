import React from 'react'
import { Dialog, TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 300,
        minWidth: 400
    }
}))

const LoginDialog = (props) => {
    const classes = useStyles()
    const { open } = props

    return (
        <Dialog open={open} aria-labelledby="Login Dialog">
            <form noValidate autoComplete="off" className={classes.dialogContent}>
                <h2>Sign in</h2>
                <TextField
          id="email-input"
          label="Email Address"
          type="email"
          variant="filled"
                />
                <TextField
          id="password-input"
          label="Password"
          type="password"
          variant="filled"
                />
                <Button color='primary'>Cancel</Button>
                <Button color='primary'>Login</Button>
            </form>
        </Dialog>
    )
}

export default LoginDialog