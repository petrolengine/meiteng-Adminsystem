import React, { Component } from 'react';
import '../resources/css/Users.css';
import * as tc from '../common/TopContent';
import SearchPage from './SearchPage';

class Users extends Component {

    constructor(props, context) {
        super(props, context);
        this.search_page = new SearchPage;
        this.state = {
            current_page: this.search_page
        };
    }

    render() {
        return (
            <div className="home_page">
                {tc.renderLogo()}
                {tc.renderToolBar()}
                {this.state.current_page.render}
            </div>
        );
    }
}

export default Users;