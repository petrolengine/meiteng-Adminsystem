import React, { Component } from 'react';
import '../resources/css/Users.css';
import * as tc from '../common/TopContent';
import SearchPage from './SearchPage';
import RoomPage from './RoomPage';

class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.pages = [
            new SearchPage(),
            new RoomPage(),
        ];
        this.state = {
            current_page: 1
        };
    }

    render() {
        return (
            <div className="home_page">
                {tc.renderLogo()}
                {tc.renderToolBar()}
                {this.pages[this.state.current_page].render}
            </div>
        );
    }
}

export default Users;