import React, { Component } from 'react';
import './Login.css';
import '../common/css/label.css'
import '../common/css/common.css'

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
            <div className="modal background">
                <div className="modal-left" >
                </div>
                <div className="modal-right">
                    <form className="modal-content" action={`${process.env.REACT_APP_URL_PREFIX}/login`} method="POST" onSubmit={this.handleSubmitEvent}>
                        <h1 className={"login_title w20_8ch"}>登录</h1>
                        {this.state.error && <label color="warning">{this.state.message}</label>}
                        < label htmlFor="uname" className="loginName w14_2ch" > 账户</label>
                        <input className="input_sty input_size" type="text" placeholder="请输入您的账户名" name="uname" required></input>
                        <label htmlFor="psw" className="passLabel w14_2ch">密码</label>
                        <input className="input_sty input_size" type="password" placeholder="请输入您的密码" name="psw" required></input>
                        <button className="btn_ok" type="submit">确定</button>
                        <input type="checkbox" name="remember" id="remember" ></input>
                        <label htmlFor="remember" className="remeber_sty w12_1ch">记住密码</label>
                    </form>
                </div>
            </div >
        );
    }
}

export default Login;
