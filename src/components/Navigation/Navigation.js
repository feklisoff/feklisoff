import React from 'react'
import Logo from '../Logo/Logo'
import './Navigation.css'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const Navigation = () => {
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Link to='/'><Logo className='logo'/></Link>
                    <div className="bannerTop">
                        <Link to='/' className="link siteName dim pointer ma0">FEKLISOFF</Link>
                    </div>
                    <div className="">
                        <Link to='/blog' className="link dim grow siteLink  dib mr3 pointer">Blog</Link>
                        <Link to='/invest' className="link dim grow siteLink  dib mr3 pointer">Investments</Link>
                        <Link to='/books' className="link dim grow siteLink dib mr3 pointer">Reading</Link>
                        <Link to='/apis' className="link dim grow siteLink dib mr3 pointer">APIs</Link>
                        <Link to='/contact' className="link dim grow siteLink dib mr3 pointer">Contact</Link>
                    </div> 
                </Grid>
            </Grid>
        </div>
    )
    }

export default Navigation