import React from 'react';
import ConditionStr from '../resources/strings/condition';
import '../resources/css/RoomPage.css';

class RoomPage {
    getConditionPage_t1(key, obj) {
        const items = [];
        items.push(<li className="bb" key={`condition_page_${key}`}>{key}:</li>);
        for (let i = 0; i < obj.length; i++) {
            items.push(<li className="aa" key={`condition_page_${key}_${obj[i]}`}>{obj[i]}</li>);
        }
        return (<ul key="t1">{items}</ul>);
    }

    getConditionPage_t2(key, obj) {
        const items = [];
        items.push(<li className="bb" key={`condition_page_${key}`}>{key}:</li>);
        for (let i = 0; i < obj.length; i++) {
            items.push(<li className="aa" key={`condition_page_${key}_${obj[i]}`}>{obj[i]}</li>);
        }
        return (<ul key="t1">{items}</ul>);
    }

    getConditionPage_t3(key, obj) {
        const items = [];
        items.push(<li className="bb" key={`condition_page_${key}`}>{key}:</li>);
        for (let i = 0; i < obj.length; i++) {
            items.push(<li className="aa" key={`condition_page_${key}_${obj[i]}`}>{obj[i]}</li>);
        }
        return (<ul key="t1">{items}</ul>);
    }

    get renderConditionPage() {
        const items = [];
        for (let key in ConditionStr.main) {
            let tmpfunc;
            switch (ConditionStr.main[key].type) {
                case 1:
                    tmpfunc = this.getConditionPage_t1;
                    break;
                case 2:
                    tmpfunc = this.getConditionPage_t2;
                    break;
                case 3:
                    items.push(<div className="room_page_line"></div>);
                    tmpfunc = this.getConditionPage_t3;
                    break;
                default:
                    continue;
            }
            items.push(tmpfunc(key, ConditionStr.main[key].content));
        }
        items.push(<div className="room_page_line"></div>);
        return (
            <div className="condition_page">
                {items}
                <div className="room_page_line"></div>
                <ul className="result">
                    <li className="tj">条件:</li>
                    <div className="tj_content" id="er">
                        <label className="second_hand_housing">二手房</label>
                        <button className="no"></button>
                    </div>
                </ul>
            </div>
        );
    }

    get render() {
        return (
            <div className="room_page">
                {this.renderConditionPage}
            </div>
        );
    }
}

export default RoomPage;