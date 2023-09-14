import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const[cookie,setcookie,removecookie]=useCookies(["email"])
    useEffect(()=>{
        console.log("called Logout");
        removecookie(["email"])
        removecookie(["password"])
        navigate('/Login')
    })
    return (
        <>
            
        </>
    );
}

export default Logout;



