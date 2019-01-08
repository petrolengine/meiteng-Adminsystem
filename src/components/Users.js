import React, { Component } from 'react';
import '../resources/css/Users.css';
import * as tc from '../common/TopContent';
import CommonStr from '../resources/strings/common'

class Users extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    get renderSearchPage() {
        return (
            <div className="logo_frame">
                <div className="form_frame">
                    <input className="search_content" placeholder={CommonStr.placeholder_serarch}></input>
                    <button className="btn_search"></button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="home_page">
                {tc.renderLogo()}
                {tc.renderToolBar()}
                <div className="background_pic"></div>
                {this.renderSearchPage}
            </div>
        );
    }
}

export default Users;