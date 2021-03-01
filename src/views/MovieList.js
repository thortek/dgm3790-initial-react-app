import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  CardContent,
  TextField,
  IconButton,
    makeStyles,
  Typography,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
        justifyContent: 'center',
    flexWrap: 'wrap',
    },
    card: {
        width: 345,
        margin: 20,
    }
}))

const MovieList = () => {
  const classes = useStyles()
  const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await axios.get(`http://localhost:5050/movie`)
                setMovieList(movies.data)
                console.log(movies.data)
            } catch (err) {
                console.error(err)
        }
        }
        fetchMovies()
}, [])

  return (
    <>
      <form>
        <TextField placeholder='Search' />
        <IconButton aria-label='search'>
          <SearchIcon />
        </IconButton>
      </form>
          <Container className={classes.root}>
              {movieList.map(movie => {

                  return (
                      <Card className={classes.card} key={movie._id}>
                          <CardActionArea>
                              <CardMedia
                                  component='img'
                                  height='300'
                                  className={classes.media}
                                  image={movie?.image?.imageUrl}
                                  title={movie.title}>
                                  
                                  </CardMedia>
                              <CardContent>
                                  <Typography gutterBottom variant='h5' component='h2'>
                                      {movie.title}
                                  </Typography>
                              </CardContent>
                              <CardActions>
                          
                              </CardActions>
                          </CardActionArea>
                      </Card>
                  )
              })}
      </Container>
    </>
  )
}

export default MovieList
