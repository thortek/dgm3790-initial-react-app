import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  TextField,
  IconButton,
  makeStyles,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: 345,
    margin: 20,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}))

const MovieList = () => {
  const classes = useStyles()
  const [movieList, setMovieList] = useState([])
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleClickDeleteOpen = (movie) => {
    //console.log(movie.movie._id)
    setSelectedMovie(movie.movie)
    setDeleteOpen(true)
  }

  const handleCloseDelete = () => {
    setDeleteOpen(false)
  }

  const handleDelete =  async () => {
    setDeleteOpen(false)
    console.log(selectedMovie._id)
    try {
      await axios.delete(`http://localhost:5050/movie/delete`, {
        data: {
          movieId: selectedMovie._id
        }
      })
      fetchMovies()
    } catch (err) {
      console.error(err)
    }
  }

  const fetchMovies = async () => {
    try {
      const movies = await axios.get(`http://localhost:5050/movie`)
      setMovieList(movies.data)
      console.log(movies.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      <form>
        <TextField placeholder='Search' />
        <IconButton aria-label='search'>
          <SearchIcon />
        </IconButton>
        <IconButton aria-label='add movie'>
      <AddCircleIcon/>
        </IconButton>
      </form>
      <Container className={classes.root}>
        {movieList.map((movie) => {
          return (
            <Card className={classes.card} key={movie._id}>
              <CardMedia
                component='img'
                height='300'
                className={classes.media}
                image={movie.image?.imageUrl}
                title={movie.title}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {movie.title}
                </Typography>
                <Box className={classes.content}>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Year: {movie.year}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Rank: {movie.rank}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label='delete' onClick={() => handleClickDeleteOpen({movie})}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          )
        })}
      </Container>
      <Dialog open={deleteOpen} onClose={handleCloseDelete}>
        <DialogTitle>Delete Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this movie?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MovieList
