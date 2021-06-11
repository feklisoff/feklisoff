import React, { useEffect, useState } from 'react';
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, TextField} from '@material-ui/core'
import { 
        selectBooks,
        selectBookStatus,
        selectBookError,
        selectBookSearch,
        setBookError,
        setBookStatus,
        setBooks,
        setBookSearch } from '../../redux/bookSlice'

const CardList = () => {
    const dispatch = useDispatch()

    const searchInput = useSelector(selectBookSearch)
    const [inputValue, setSearch] = useState('')
    const books =  useSelector(selectBooks)
    // const [myBooks, setMyBooks] = useState()
    // const [loading, setLoading] = useState(true)

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setBookSearch(inputValue))
        dispatch(setBooks())
    }

    const cardArray = books.map((book, i) => {
        return (<Card 
            key={i} 
            id={books[i].id} 
            name={books[i].name} 
            author={books[i].author}
            rating={books[i].rating} />
        )
    })

    return (
        <div className='ma3'>
            <Grid container direction='column' spacing={4}>
                <Grid container>
                    <Grid item xs={4}>
                        <Button className='blogButton' variant="outlined" color="primary">Add new book</Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <form value={inputValue} noValidate autoComplete='off'>
                                <TextField id="outlined-basic" label="Search titles" variant="outlined" />
                            </form>
                            <Button onClick={handleSearch} className='blogButton' variant="outlined" color="primary">Search</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {cardArray}
                </Grid>
            </Grid>
        </div>
    )
}

export default CardList;