import React, { Component } from 'react';
import './Users.css';
import RequestHandler from '../common/RequestHandler';


class Users extends Component {

    componentWillMount() {
        this.setState({ error: false, data: [] });
    }

    componentDidMount() {
        RequestHandler.instance.send_message("/users", undefined, this);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>{this.state.errormsg}</h1>
                    <h2>{this.state.code}</h2>
                    <pre>{this.state.stack}</pre>
                </div>
            );
        } else {
            const listItems = this.state.data.map((value: number[], index: number) =>
                <li key={index}>{value.map((v: number, idx: number) => <ul key={"ul" + idx}>{v}</ul>)}</li>
            );
            return (
                <ul>{listItems}</ul>
            );
        }
    }

    on_loadend(data) {
        this.setState({ error: false, data: data });
    }

    on_error(code, data) {
        if (typeof (data) === "object")
            this.setState({ error: true, code: code, errormsg: data.message, stack: data.stack });
    }
}

export default Users;
