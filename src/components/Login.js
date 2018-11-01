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
            message: ""
        };
    }

    handleSubmitEvent(event) {
        this.setState({ error: false });
        event.preventDefault();
        fetch(event.target.action, {
            method: 'POST', body: new URLSearchParams(new FormData(event.target))
        }).then((resp) => {
            if (!resp.ok) {
                this.setState({ error: true });
            }
            return resp.json();
        }).then((data) => {
            if (this.state.error) {
                this.setState({ message: data.message });
                return;
            }
            window.localStorage.setItem("Authorization", data.jwt);
            window.localStorage.setItem("Flag", data.flag);
            window.location.assign(process.env.REACT_APP_BASE_NAME + 'users');
        }).catch((e) => {
            this.setState({ error: true, message: `error: ${e}` });
        });
    }

    render() {
        return (
            <div className="modal">
                <form className="modal-content" action={`${process.env.REACT_APP_URL_PREFIX}/login`} method="POST" onSubmit={this.handleSubmitEvent}>
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
                </form>
            </div >
        );
    }
}

export default Login;
