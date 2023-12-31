import React from 'react';
import LoginStyle from './LoginStyle.module.css'  ;

import { Link } from 'react-router-dom';
import User from '../scripts/User';

interface LoginProps {
    user: User;
}

function Login() {

    return (

        <div className={LoginStyle.myImages}>
            <div className={LoginStyle.scroll}>
                <div style={{position: 'relative', display: 'flex'}}>
                    <div className={LoginStyle.topline}></div>
                    <h1 className={LoginStyle.topfont} style={{ position: 'absolute', top: '20%', left: '3%', color: 'white' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }} className={LoginStyle.topfont}>ITAG</Link>
                    </h1>

                </div>

                <div className={LoginStyle.box} style={{display:'flex', flexDirection:'column'}}>

                    <div>
                        <h1 className={LoginStyle.font} >IT ADVENTURERS<br/>GUILD</h1>
                    </div>

                    <div className={LoginStyle.inputBox} style={{paddingTop: '2%' }}>
                        <input placeholder='E-mail/Username' type='input' className={LoginStyle.font}></input>
                    </div>

                    <div className={LoginStyle.inputBox} style={{paddingTop: '3%' }}>
                        <input placeholder='Password' type='input' className={LoginStyle.font}></input>
                    </div>

                    <div className={LoginStyle.submit} style={{ marginTop:'-5%'}}>
                        <button type={'submit'}><a href="#" >Login</a></button>
                    </div>

                    <div className={LoginStyle.line} style={{marginTop:'3%'}} ></div>

                    <div className={LoginStyle.supButton} style={{marginTop:'10%'}} >
                        <button type={'submit'}><a href='#' >Are you new adventurer?</a></button>
                        <button type={'submit'}><a href='#' >Forgot password?</a></button>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Login;
