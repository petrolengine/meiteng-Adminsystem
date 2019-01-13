import React from 'react';
import '../resources/css/RoomPage.css';
import RoomConditionPage from './RoomConditionPage';

class RoomPage {
    constructor(context) {
        this.current_items = [];
        this.context = context;
        this.roomConditionPage = new RoomConditionPage(context);
    }

    get render() {
        return (
            <div className="room_page">
                {this.roomConditionPage.render}
            </div>
        );
    }
}

export default RoomPage;