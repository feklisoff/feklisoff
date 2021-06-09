import React, { useState } from 'react'
import ProfileCard from '../HomePage/ProfileCard'
import { TextField, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import validator from 'validator'

const ContactForm = () => {

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Valid Email')
        } else {
            setEmailError('Enter Valid Email!')
        }
    }

    return (
        <div className='pa4'>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={4}>
                    <ProfileCard />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <h2>Reach Out!</h2>
                    <h3>You can do so directly below or find me using my social links on the left</h3>
                    <form className='pa5'>
                        <Grid container direction='column' spacing={3}>
                            <Grid item>
                                <TextField placeholder='John Smith' required='true' variant="outlined" label="Full Name" fullWidth autocomplete="none"/>
                            </Grid>
                            <Grid item>
                                <TextField onChange={(e) => validateEmail(e)} placeholder='john@gmail.com' required='true' variant="outlined" label="Email" fullWidth autocomplete="none"/>
                                <div>{emailError}</div>
                            </Grid>
                            <Grid item>
                                <TextField placeholder='What a wonderful website!' required='true' variant="outlined" label="Message" fullWidth multiline rows={5} autocomplete="none"/>
                            </Grid>
                            <Grid item>
                                {(emailError === 'Valid Email') ? (
                                    <Button variant="outlined" color="primary" type="submit">Submit</Button>
                                ) : (
                                    <Button variant="disabled" color="primary" type="submit">Submit</Button>
                                )}
                                
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactForm
