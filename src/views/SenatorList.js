import React, { useState, useEffect } from 'react'
import senateData from '../data/senate.json'
import {
  Grid,
  makeStyles
} from '@material-ui/core'
import Senator from '../components/Senator'
import  { useCongressContext } from '../contexts/CongressContext'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
})) 

const SenatorList = () => {
  const classes = useStyles()
  const memberData = useCongressContext()
  
  const [memberData, setMemberData] = useState({
    loading: false,
    senators: []
    })                   

  useEffect(() => {
    setMemberData({
      loading: false,
      senators: senateData.results[0].members
    })
  }, [])

    return (
      <div>
        <Grid className={classes.root} container spacing={2}>
          {memberData.senators.map((member, index) => {

            return (
              <Grid key={member.id + member.total_votes} item>
                <Senator senator={member}/>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
}

export default SenatorList
