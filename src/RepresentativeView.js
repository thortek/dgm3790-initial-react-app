import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Checkbox, Avatar } from '@material-ui/core'

const RepresentativeView = (props) => {
    const member = props.rep
    
    return (
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar`}
              src={`/static/images/avatar.jpg`}
            />
          </ListItemAvatar>
          <ListItemText primary={`${member.first_name}`} />
          <ListItemSecondaryAction>
            <Checkbox
              edge="end"
            />
          </ListItemSecondaryAction>
        </ListItem>
      )
}

export default RepresentativeView