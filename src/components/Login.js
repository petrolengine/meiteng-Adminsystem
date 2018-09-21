import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import avatar2 from './svgs/avatar2.svg';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.state = {
            error: false,
            message: "",
            state: 1
        };
    }

    handleSubmitEvent(event) {
        this.setState({ error: false });
        event.preventDefault();
        fetch(event.target.action, {
            method: 'POST', body: new URLSearchParams(new FormData(event.target)) // event.target is the form
        }).then((resp: Response) => {
            if (!resp.ok) {
                this.setState({ error: true });
                return resp.json();
            }
            return resp.text();
        }).then((data) => {
            if (this.state.error) {
                this.setState({ message: data.message });
                return;
            }
            window.localStorage.setItem("Authorization", data);
            window.location.assign(process.env.REACT_APP_BASE_NAME + 'users');
        }).catch((e) => {
            this.setState({ error: true, message: "error: " + e });
        });
    }

    render() {
        if (this.state.state === 1) {
            return (
                <div className="modal">
                    <form className="modal-content" action={process.env.REACT_APP_URL_PREFIX + "/login"} method="POST" onSubmit={this.handleSubmitEvent}>
                        <div className="imgcontainer">
                            <img src={avatar2} alt="Avatar" className="avatar" />
                        </div>
                        {this.state.error && <Alert color="warning">{this.state.message}</Alert>}
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
                            <button type="button" onClick={() => this.setState({ state: 2 })} className="registbtn">Regist</button>
                            <span className="psw">Forgot <a href={process.env.REACT_APP_URL_PREFIX}>password?</a></span>
                        </div>
                    </form>
                </div >
            );
        } else {
            return (
                <div className="modal">
                    <form className="modal-content" action={process.env.REACT_APP_URL_PREFIX + "/regist"} method="POST" onSubmit={this.handleSubmitEvent}>
                        <div className="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr></hr>
                            {this.state.error && <Alert color="warning">{this.state.message}</Alert>}
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
                            <p>By creating an account you agree to our <a href={process.env.REACT_APP_URL_PREFIX} style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>
                            <div className="clearfix">
                                <button type="button" onClick={() => {
                                    this.setState({ state: 1 });
                                }} className="cancelbtn">Cancel</button>
                                <button type="submit" className="signupbtn">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div >
            );
        }
    }
}

export default Login;
