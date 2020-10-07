import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Drawer,
  List,
  ListItem,
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
    textDecoration: 'none',
  },
  list: {
    width: 250,
    backgroundColor: '#00f'
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to='/house' className={classes.navSpacing}>
            House
          </NavLink>
          <NavLink to='/senate' className={classes.navSpacing}>
            Senate
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <List className={classes.list}>
          <ListItem>
          <NavLink to='/house' className={classes.navSpacing} onClick={handleDrawerToggle}>
            House
          </NavLink>
          </ListItem>
          <ListItem>
          <NavLink to='/senate' className={classes.navSpacing} onClick={handleDrawerToggle}>
            Senate
          </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
