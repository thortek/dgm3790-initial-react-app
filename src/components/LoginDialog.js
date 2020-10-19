import React from 'react'
import { Box, Dialog, TextField, Button, makeStyles } from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles(() => ({
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 300,
    minWidth: 400,
    padding: 20,
  },
}))

const LoginDialog = (props) => {
  const classes = useStyles()
  const { open, onClose } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby='Login Dialog'>
      <Formik
        initialValues={{
          email: 'foo@example.com',
          password: 'Password123',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(50)
            .required('Email is required'),
          password: Yup.string()
            .min(8, 'Password is too short!')
            .max(50, 'Password is too long!')
            .required('Password is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            console.log(values.email, values.password)
          } catch (err) {
            console.error(err)
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form noValidate autoComplete='off' className={classes.dialogContent}>
            <h2>Sign in</h2>
            <TextField
              autoFocus
              label='Email Address'
              type='email'
              name='email'
              variant='filled'
              margin='normal'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              required
              fullWidth
            />
            <TextField
              id='password-input'
              label='Password'
              type='password'
              variant='filled'
              margin='normal'
              placeholder='********'
            />
            <Box>
              <Button color='primary' onClick={handleClose}>
                Cancel
              </Button>
              <Button color='primary' type='submit'>Login</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Dialog>
  )
}

export default LoginDialog
