import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    dem: {
      color: 'blue',
    },
    repub: {
      color: 'red',
    },
    navSpacing: {
      marginRight: '5rem',
      color: '#fff',
      textDecoration: 'none'
    },
}))
  
export default function ButtonAppBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'>
                        <MenuIcon/>
                    </IconButton>
                    <NavLink to='/house' className={classes.navSpacing}>House</NavLink>
                    <NavLink to='/senate' className={classes.navSpacing}>Senate</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}