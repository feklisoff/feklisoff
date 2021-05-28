import React from 'react'
import Logo from '../Logo/Logo'
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
    return(
        <div>
            <Logo onRouteChange={onRouteChange}/>

            <div class="bannerTop">
                <p onClick={() => onRouteChange('home')} className="fl w-75 siteName dim pointer ma0">FEKLISOFF</p>
            </div>
            
            <div class="fl w-75">
                <p onClick={() => onRouteChange('blog')} className="link dim siteLink  f5-ns dib mr3 pointer">Blog</p>
                <p onClick={() => onRouteChange('finportfolio')} className="link dim siteLink  f5-ns dib mr3 pointer">Investments</p>
                <p onClick={() => onRouteChange('booklist')} className="link dim siteLink  f5-ns dib mr3 pointer">Reading</p>
                <p onClick={() => onRouteChange('apis')} className="link dim siteLink  f5-ns dib mr3 pointer">APIs</p>
                <p onClick={() => onRouteChange('contact')} className="link dim siteLink  f5-ns dib mr3 pointer">Contact</p>
            </div>   
        </div>
    )
    }

export default Navigation