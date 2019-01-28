import React, { Component } from 'react';
import '../resources/css/Users.css';
import TopContent from '../common/TopContent';
import SearchPage from './SearchPage';
import RoomPage from './RoomPage';
import AddLandordPage from './AddLandordPage';


class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.topcontent = new TopContent(this);
        this.pages = [
            new SearchPage(),
            new RoomPage(this),
            new RoomPage(this),
            new RoomPage(this),
            new RoomPage(this),
            new RoomPage(this),
            new AddLandordPage(this),
        ];
        this.state = {
            current_page: 1
        };
    }

    render() {
        const hasSearchBar = [0, 1, 1, 1, 1, 1, 0];
        return (
            <div className="home_page">
                {this.topcontent.renderLogo}
                {this.topcontent.renderToolBar}
                {hasSearchBar[this.state.current_page % this.pages.length] === 1 ? this.topcontent.renderSearchBar : undefined}
                {this.pages[this.state.current_page % this.pages.length].render}
            </div>
        );
    }
}

export default Users;