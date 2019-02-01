import React, { Component } from 'react';
import '../resources/css/Users.css';
import TopContent from '../common/TopContent';
import SearchPage from './SearchPage';
import RoomPage from './RoomPage';
import AddPersonPage from './AddPersonPage';
import AddAreaPage from './AddAreaPage';
import AddRoomPage from './AddRoomPage';
import PersonType from '../common/PersonType';
import LandlordPage from './LandlordPage';

class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.topcontent = new TopContent(this);
        this.pages = [
            // page obj | need search bar | 
            [new SearchPage(), false],
            [new RoomPage(this), true],
            [new RoomPage(this), true],
            [new LandlordPage(this), true],
            [new RoomPage(this), true],
            [new RoomPage(this), true],
            [new RoomPage(this), true],
            [new AddRoomPage(this, true), false],
            [new AddRoomPage(this, false), false],
            [new AddAreaPage(this), false],
            [new AddPersonPage(this, PersonType.LANDLORD), false],
            [new AddPersonPage(this, PersonType.CUSTOMER), false],
            [new AddPersonPage(this, PersonType.STAFF), false],
        ];
        this.state = {
            current_page: 3
        };
    }

    render() {
        return (
            <div className="home_page">
                {this.topcontent.renderLogo}
                {this.topcontent.renderToolBar}
                {this.topcontent.renderSearchBar(this.pages[this.state.current_page % this.pages.length][1])}
                {this.pages[this.state.current_page % this.pages.length][0].render}
            </div>
        );
    }
}

export default Users;