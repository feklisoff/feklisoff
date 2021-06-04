import React, { useEffect, useState } from "react";
import Article from '../Blog/Article'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, TextField} from '@material-ui/core'
import { 
    selectSignedIn,
     selectUserData,
     selectBlogData,
      selectUserInput,
       setInput,
        setBlogData } from '../../redux/userSlice'

const Blog = () => {

    const dispatch = useDispatch()
    const searchInput = useSelector(selectUserInput)
    const [inputValue, setInputValue] = useState('')
    const handleClick = (e) => {
        e.preventDefault
        dispatch(setInput(inputValue))
    }
    const [blogs, setBlogs] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('myDBurl')
        .then((response) => {
            dispatchEvent(setBlogData(response.data))
            setBlogs(response.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [searchInput])

    const myBlogs =  useSelector(selectBlogData)
    const blogList = myBlogs.map((user, i) => {
        return (
            <Article
                date={myBlogs[i].date}
                title={myBlogs[i].title}
                description={myBlogs[i].description}
                body={myBlogs[i].body}
                author={myBlogs[i].author}
                tags={myBlogs[i].tags} />
        )
    })

    return (
        <div>
            <Grid container direction='column' spacing={3}>
                <Grid container>
                    <Grid item xs={4}>
                        <Button className='blogButton' variant="outlined" color="primary">
                            Add new post
                        </Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <form value={inputValue} noValidate autoComplete='off'>
                                <TextField id="outlined-basic" label="Search titles" variant="outlined" />
                            </form>
                            <Button onClick={handleClick} className='blogButton' variant="outlined" color="primary">
                                Search
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    {blogList}
                </Grid>
            </Grid>
        </div>
    )
}


export default Blog