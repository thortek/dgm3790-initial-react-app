import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Container,
    makeStyles,
    Typography,
    Card,
    CardMedia,
    CardActionArea,
    CardContent, } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    messages: {
        backgroundColor: '#ddd',
        minHeight: '20rem',
        minWidth: '20rem',
        textAlign: 'center',
      },
      card: {
        maxWidth: 345,
        margin: 20,
      },
}))

const ALL_CHARACTERS = gql`
query {
    characters {
    results {
      id
      name
      gender
      image
      episode {
        name
        air_date
      }
    }
  }
}
`

const RickMortyViewer = () => {
    const classes = useStyles()

    const { loading, error, data } = useQuery(ALL_CHARACTERS)

    if (loading) {
        return (
            <Container className={classes.root}>
                <Typography className={classes.messages}>Loading...</Typography>
            </Container>
        )
    }

    if (error) {
        return (
            <Typography className={classes.messages}>{`${error.message}`}</Typography>
        )
    }

    const characterList = data.characters.results

    console.log(characterList)

    return (
        <Container className={classes.root}>
            {characterList.map(character => {
                return (
                    <Card className={classes.card} key={character.id}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='300'
                                className={classes.media}
                                image={character.image}
                                title={character.name}
                                />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='h2'>
                                    {character.name}
                                </Typography>
                                <Typography variant='subtitle1' color='textSecondary'>
                                    First Episode: {character.episode[0].name}
                                </Typography>
                                <Typography variant='subtitle2' color='textSecondary'>
                                    Air date: {character.episode[0].air_date}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}
        </Container>
        
    )
}

export default RickMortyViewer