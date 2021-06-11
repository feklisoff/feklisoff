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
    const [inputValue, setMyInput] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setInput(inputValue))
        console.log(e)
    }

    const [blogs, setBlogs] = useState()
    const [loading, setLoading] = useState(true)


    const myBlogs =  useSelector(selectBlogData)
    const filteredBlogs = myBlogs.filter(blogs => {
        return blogs.title.toLowerCase().includes(searchInput.toLowerCase())
    })

    const blogList = filteredBlogs.map((blog, i) => {
        return (
            <Article
                key={i}
                date={blog.date}
                title={blog.title}
                description={blog.description}
                body={blog.body}
                author={blog.author}
                tags={blog.tags}
                imgUrl={blog.imgUrl} />
        )
    })

    return (
        <div className='ma3'>
            <Grid container direction='column' spacing={4}>
                <Grid container>
                    <Grid item xs={4}>
                        <Button className='blogButton' variant="outlined" color="primary">Add new post</Button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <form value={inputValue} noValidate autoComplete='off'>
                                <TextField id="outlined-basic" label="Search titles" variant="outlined" />
                            </form>
                            <Button onClick={handleClick} className='blogButton' variant="outlined" color="primary">Search</Button>
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