import React, { useState, useEffect } from 'react'
//import repsData from './data/house.json'
import axios from 'axios'
import RepresentativeView from './RepresentativeView'
import { List, makeStyles } from '@material-ui/core'
import LazyLoad from 'react-lazyload'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#ddd',
  },
}))

const Loading = () => (
  <div>
    <h4>Loading...</h4>
  </div>
)

const RepresentativeList = () => {
  const classes = useStyles()

  const [congressData, setCongressData] = useState({
    loading: false,
    reps: [],
  })

  //const [congressReps, setCongressReps] = useState({ reps: [] })
  //const [loading, setLoading] = useState({ loading: false })

  const fetchReps = () => {
    setCongressData({ loading: true })
    axios
      .get(`https://api.propublica.org/congress/v1/116/house/members.json`, {
        headers: { 'x-api-key': process.env.REACT_APP_PROPUBLICA_API_KEY }
      })
      .then(function (response) {
        console.log(response.data)
        setCongressData({
          loading: false,
          reps: response.data.results[0].members,
        })
      }).catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    //fetchReps()
  }, [])

  return (
    <div>
      {!congressData.loading && (
        <div className='column'>
          <h1>{congressData.reps.length} Representatives!</h1>
          <List dense className={classes.root}>
            {congressData.reps.map((member) => {
              return (
                <LazyLoad
                  key={member.id + member.total_votes}
                  placeholder={<Loading />}
                  height={200}
                >
                  <RepresentativeView
                    rep={member}
                    key={member.id + member.total_votes}
                  ></RepresentativeView>
                </LazyLoad>
              )
            })}
          </List>
        </div>
      )}
    </div>
  )
}

export default RepresentativeList
