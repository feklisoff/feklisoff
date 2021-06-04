import React from 'react'
import Grid from '@material-ui/core/Grid';
import './InfoCards.css'
import GoogleLogin from 'react-google-login'
import { 
    selectSignedIn, 
    setUserData,
    setSignedIn,
    selectUserData } from '../../redux/userSlice'
import ProfileCard from './ProfileCard'
import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
    
    const dispatch = useDispatch()

    const login = (response) => {
        console.log(response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }

    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)

    return (
        <div>
            {!isSignedIn ? (
            <Grid container>
                <Grid item xs={12} lg={4}>
                    <ProfileCard />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <div className='homeText'>
                        <p>This is my website to keep track of all the great things! Here you'll be able to find my blog, investments, reading tracker, and more.
                             The whole website serves as a sandbox for my skills ranging from technical development to researching. 
                             By logging in, you may unlock certain hidden/locked parts of the website.</p>
                        <GoogleLogin 
                        clientId='1008671101441-jai61r4qqedlgq0sfq5hmnj744c3sjm0.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className='login__button'>Log In with Google</button>
                        )}
                        onSuccess={login}
                        onFailure={console.log("login cancelled")}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'} />
                    </div>
                </Grid>
            </Grid>) : (
                <div className='homeText pa4 ma4'>
                    <h1>Welcome {!userData ? "" : userData.name}</h1>
                </div>
            )}
        </div>
    )
}

export default HomePage