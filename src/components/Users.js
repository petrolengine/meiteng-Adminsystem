import React, { Component } from 'react';
import '../resources/css/Users.css';
import TopContent from '../common/TopContent';
import SearchPage from './SearchPage';
import RoomPage from './RoomPage';

class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.topcontent = new TopContent(this);
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
                {this.topcontent.renderLogo}
                {this.topcontent.renderToolBar}
                {this.pages[this.state.current_page % this.pages.length].render}
            </div>
        );
    }
}

export default Users;