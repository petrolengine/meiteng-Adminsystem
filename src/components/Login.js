import React, { Component } from 'react';
import './Login.css';
import avatar2 from './svgs/avatar2.svg'

class Login extends Component {
    componentDidMount() {
        document.forms['loginform'].addEventListener('submit', (event) => {
            event.preventDefault();
            fetch(event.target.action, {
                method: 'POST', body: new URLSearchParams(new FormData(event.target)) // event.target is the form
            }).then((resp) => {
                return resp.text(); // or resp.json() or whatever the server sends
            }).then((body) => {
                window.localStorage.setItem("Authorization", body);
                window.location.assign('/users');
            }).catch((error) => {
                console.error('error', error);
            });
        });
    }

    componentWillUnmount() {
        document.forms['loginform'].removeEventListener('submit');
    }

    render() {
        return (
            <div className="modal">
                <form className="modal-content" action="http://127.0.0.1:3001/login" method="POST" id="loginform">
                    <div className="imgcontainer">
                        <img src={avatar2} alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required></input>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" defaultChecked name="remember" />Remember me
                        </label>
                    </div>
                    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                        <button type="button" onClick={() => window.location.assign('/regist')} className="registbtn">Regist</button>
                        <span className="psw">Forgot <a href="/">password?</a></span>
                    </div>
                </form>
            </div >

        );
    }
}

export default Login;
