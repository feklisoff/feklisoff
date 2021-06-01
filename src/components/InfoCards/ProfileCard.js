import React from 'react'
import Grid from '@material-ui/core/Grid';
import './InfoCards.css'
import github from './github.png'
import linkedin from './linkedin.png'
import crypto from './crypto.png'
import profilePic from './profile.png'

const ProfileCard = () => {
    return (
        <div className='profileCard'>
            <Grid container direction='column'>
                <Grid item xs={12}>
                    <div className='profileCardText'>Aleksei Feklisov</div>
                </Grid>
                <Grid item xs={12}>
                    <img alt='profile' src={profilePic} className='profilePic' />
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <div className='profileCardText'>Welcome to my Home Page!</div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <a href='https://github.com/feklisoff' rel="noopener noreferrer" target="_blank"><img className='grow br-100 thumbnailLink' src={github} alt='github'/></a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href='https://www.linkedin.com/in/afeklisov/' rel="noopener noreferrer" target="_blank"><img className='grow br-100 thumbnailLink' src={linkedin} alt='linkedin'/></a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href='google.com' rel="noopener noreferrer" target="_blank"><img className='grow br-100 thumbnailLink' src={crypto} alt='crypto'/></a>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileCard