import React, { Component } from 'react'
import senateData from '../src/data/senate.json'
import './Senators.scss'
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Grid,
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import SenateCommittees from './components/SenateCommittees'
//import palpatine from './assets/images/palpatine.jpeg'

class Senators extends Component {
  state = {
    members: senateData.results[0].members,
    dems: senateData.results[0].members.filter(
      (member) => member.party === 'D',
    ),
    repubs: senateData.results[0].members.filter(
      (member) => member.party === 'R',
    ),
    indy: senateData.results[0].members.filter(
      (member) => member.party === 'ID',
    ),
  }

  senioritySortHandler = () => {
    const newMembers = [...this.state.members]
    const sortedMembers = newMembers.sort((a, b) => {
      return a.seniority - b.seniority
    })
    this.setState({
      members: sortedMembers,
    })
  }

  render() {
    return (
      <div className='column'>
        <h1>{this.state.members.length} Senators!</h1>
        <h2>Democrats: {this.state.dems.length}</h2>
        <h2>Republicans: {this.state.repubs.length}</h2>
        <h2>Independents: {this.state.indy.length}</h2>

        <button onClick={this.senioritySortHandler}>Sort by Seniority</button>
        <Button variant='contained' color='primary'>
          Material UI Button!
        </Button>
        <Grid className='containerGrid' container spacing={2}>
          {this.state.members.map((member, index) => {
            const memberMiddle =
              member.middle_name === null ? '' : member.middle_name
            const fullName = `${member.first_name} ${memberMiddle} ${member.last_name}`

            return (
              <Grid key={fullName} item>
                <Card className='card'>
                  <CardActionArea className='cardActionArea'>
                    <CardMedia
                      className='cardMedia'
                      component='img'
                      alt='Contemplative Reptile'
                      height='140'
                      image={`https://www.govtrack.us/static/legislator-photos/${member.govtrack_id}-200px.jpeg`}
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {fullName}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='div'
                      >
                        <SenateCommittees url={member.api_uri} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton color='primary'>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton color='primary'>
                      <FacebookIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default Senators
