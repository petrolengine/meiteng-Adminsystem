import React, { Component } from 'react';
import '../resources/css/Users.css';
import TopContent from '../common/TopContent';
import SearchPage from './SearchPage';
import RoomPage from './RoomPage';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import Test5 from './Test5';
import Test6 from './Test6';

class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.topcontent = new TopContent(this);
        this.pages = [
            new SearchPage(),
            new RoomPage(this),
            new Test(),
            new Test2(),
            new Test3(),
            new Test5(),
            new Test6(),
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
                {/* {this.state.current_page !== 0 ? this.topcontent.renderSearchBar : undefined} */}
                {this.pages[this.state.current_page % this.pages.length].render}
            </div>
        );
    }
}

export default Users;