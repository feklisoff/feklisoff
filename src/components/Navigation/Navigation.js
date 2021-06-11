import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { useSelector, useDispatch } from 'react-redux'
import { selectSignedIn, setSignedIn, setUserData } from '../../redux/userSlice'
import { GoogleLogout } from 'react-google-login'

const Navigation = () => {

    const dispatch = useDispatch()

    const isSignedIn = useSelector(selectSignedIn)

    const logout = (response) => {
        dispatch(setUserData(null))
        dispatch(setSignedIn(false))
    }
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <div className="bannerTop">
                        <Link to='/' className="link siteName dim pointer ma0">FEKLISOFF</Link>
                    </div>
                    <div className="">
                        <Link to='/blog' className="link dim grow siteLink  dib mr3 pointer">Blog</Link>
                        <Link to='/invest' className="link dim grow siteLink  dib mr3 pointer">Investments</Link>
                        <Link to='/books' className="link dim grow siteLink dib mr3 pointer">Reading</Link>
                        <Link to='/apis' className="link dim grow siteLink dib mr3 pointer">Projects</Link>
                        <Link to='/contact' className="link dim grow siteLink dib mr3 pointer">Contact</Link>
                        {isSignedIn ? (<GoogleLogout clientId='1008671101441-jai61r4qqedlgq0sfq5hmnj744c3sjm0.apps.googleusercontent.com'
                         render={(renderProps) => (
                             <button 
                             className='link dim grow siteLink  dib mr3 pointer'
                             onClick={renderProps.onClick}
                             disabled={renderProps.disabled}>Log Out</button>
                         )}
                         onLogoutSuccess={logout} />) : ('')}
                    </div> 
                </Grid>
            </Grid>
        </div>
    )
    }

export default Navigation

// import Logo from '../Logo/Logo'
// logo component that used to be above bannerTop div
// <Link to='/'><Logo className='logo'/></Link>