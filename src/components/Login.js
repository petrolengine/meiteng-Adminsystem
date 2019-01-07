import React, { Component } from 'react';
import './Login.css';
import '../common/css/label.css'

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
                    <h1 className={"login_title w20_8ch"}>登录</h1>
                    {this.state.error && <label color="warning">{this.state.message}</label>}
                    <label className="login_nmr login_label w14_2ch" > 账户</label>
                    <input className="login_nmr login_input_sty" type="text" placeholder="请输入您的账户名" name="uname" required></input>
                    <label className="login_nmr login_label w14_2ch">密码</label>
                    <input className="login_nmr login_input_sty" type="password" placeholder="请输入您的密码" name="psw" required></input>
                    <button className="login_nmr btn_ok w14_2ch" type="submit">确定</button>
                    <input className="login_cb" type="checkbox" name="remember" id="remember" ></input>
                    <label htmlFor="remember" className="remeber_sty w12_1ch">记住密码</label>
                </form>
            </div >
        );
    }
}

export default Login;
