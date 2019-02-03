import React, { Component } from 'react';
import '../resources/css/Login.css';
import '../resources/css/label.css'
import CommonStr from '../resources/strings/common';

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
            window.localStorage.setItem("tempLoginData", JSON.stringify(data));
            window.location.assign(process.env.REACT_APP_BASE_NAME + 'users');
        }).catch((e) => {
            this.setState({ error: true, message: `error: ${e}` });
        });
    }

    render() {
        return (
            <div className="login_modal">
                <div className="login_modal_left"></div>
                <form className="login_modal_right" action={`${process.env.REACT_APP_URL_PREFIX}/login`} method="POST" onSubmit={this.handleSubmitEvent}>
                    <h1 className={"login_title w20_8ch"}>{CommonStr.login}</h1>
                    {this.state.error && <label className="w15_2ch login_nmr">{this.state.message}</label>}
                    <label className="login_nmr login_label w15_2ch" >{CommonStr.user}</label>
                    <input className="login_nmr login_input_sty" type="text" placeholder={CommonStr.placeholder_user} name="uname" required></input>
                    <label className="login_nmr login_label w15_2ch">{CommonStr.pass}</label>
                    <input className="login_nmr login_input_sty" type="password" placeholder={CommonStr.placeholder_pass} name="psw" required></input>
                    <button className="login_nmr btn_ok w15_2ch" type="submit">{CommonStr.ok}</button>
                    {/* <input className="login_cb" type="checkbox" name="remember" id="remember" ></input>
                    <label htmlFor="remember" className="remeber_sty w12_1ch">{CommonStr.remember_pass}</label> */}
                </form>
            </div >
        );
    }
}

export default Login;
