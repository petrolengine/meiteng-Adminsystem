import React, { Component } from 'react';
import './Regist.css';


class Regist extends Component {
    componentDidMount() {
        document.forms['registform'].addEventListener('submit', (event) => {
            event.preventDefault();
            fetch(event.target.action, {
                method: 'POST', body: new URLSearchParams(new FormData(event.target)) // event.target is the form
            }).then((resp) => {
                return resp.text(); // or resp.json() or whatever the server sends
            }).then((body) => {
                document.cookie = "authorization=" + body;
                window.location.assign('/users');
            }).catch((error) => {
                alert('error', error);
            });
        });
    }

    componentWillUnmount() {
        document.forms['registform'].removeEventListener('submit');
    }

    render() {
        return (
            <div className="modal">
                <form className="modal-content" action="http://127.0.0.1:3001/regist" method="POST" id="registform">
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr></hr>
                        <label htmlFor="name"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="name" required />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <label htmlFor="psw-repeat"><b>Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                        <label>
                            <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: "15px" }} />
                            Remember me
                        </label>
                        <p>By creating an account you agree to our <a href="/" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                        <div className="clearfix">
                            <button type="button" onClick={() => {
                                if (this.props.history.length > 2)
                                    this.props.history.go(-1);
                                else
                                    document.location.assign("/");
                            }} className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Regist;
