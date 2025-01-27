import React, { useEffect } from 'react'
import PageLoader from '../ui/PageLoader.jsx'
import useUrlParse from '../../hooks/useURLParse.js'
import { setItemsToLocalStorage } from '../../services/localStorage.js'

const GoogleAuthRedirect = () => {
    
    const params = useUrlParse();

    useEffect(() => {
        const profile = JSON.parse( params.get('profile'));  
        const tokenExpiry = new Date().getTime() + 24 * 60 * 60 * 1000;

        console.log(profile)
        
        if(profile){
            setItemsToLocalStorage("user", profile);
            setItemsToLocalStorage("sessionTimeout", tokenExpiry);
        }
        
        window.location.href = "/";
        return;
    }, [])

  return <PageLoader/>;
}

export default GoogleAuthRedirect