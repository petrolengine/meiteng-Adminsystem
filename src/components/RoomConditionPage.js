import React from 'react';
import RoomConditionStr from '../resources/strings/condition';
import '../resources/css/RoomConditionPage.css';

class RoomConditionPage {
    constructor(context) {
        this.current_items = [];
        this.search_result = [];
        this.context = context;
    }

    handleClickConditionPage_t1(x, y, arr) {
        let toRemove;
        if (this.current_items[x] > 0) {
            toRemove = this.current_items[x];
        }
        this.current_items[x] = (this.current_items[x] === y) ? 0 : y;
        if (this.current_items[x] > 0) {
            this.search_result.push(arr[y]);
        }
        if (toRemove) {
            const pos = this.search_result.indexOf(arr[toRemove]);
            if (pos >= 0) {
                this.search_result.splice(pos, 1);
            }
        }
        this.context.setState({ "RoomConditionPageState": this.current_items, "RoomConditionPageResultState": this.search_result });
    }

    getConditionPage_t1(parent, x, key, obj) {
        const items = [];
        this.current_items.push(0);
        let unikey = `condition_page_item_${x}`;
        items.push(<li className="rp_contition_title" key={unikey}>{key}:</li>);
        for (let i = 0; i < obj.length; i++) {
            unikey = `condition_page_item_${x}_${i}`;
            const clazName = "rp_condition_item " + (this.current_items[x] === i ? "rp_select_condition_item" : "rp_normal_condition_item");
            items.push(<li className={clazName} key={unikey} onClick={() => this.handleClickConditionPage_t1(x, i, obj)}>{obj[i]}</li>);
        }
        parent.push(<ul key={`condition_page_${x}`}> {items}</ul>);
    }

    __getSubContiditionPage_t2(x, y, obj) {
        const items = [];
        for (let i = 0; i < obj.length; i++) {
            const clazName = "rp_condition_item " + (this.current_items[x][1] === i ? "rp_select_condition_item" : "rp_normal_condition_item");
            items.push(<li className={clazName} key={`condition_subpage_${x}_${y}_${i}`} onClick={() => this.handleClickSubConditionPage_t2(x, i, obj)}>{obj[i]}</li>);
        }
        return (
            <div className="rp_contition_sub_collection" key={`condition_subpage_${x}_${y}`}>
                <div className="inner_frame">
                    <ul>{items}</ul>
                </div>
            </div>
        );
    }

    handleClickSubConditionPage_t2(x, y, obj) {
        let toRemove;
        if (this.current_items[x][1] > 0) {
            toRemove = this.current_items[x][0];
        }
        this.current_items[x][1] = y;
        if (this.current_items[x][1] > 0) {
            this.search_result.push(obj[y]);
        }
        if (toRemove) {
            const pos = this.search_result.indexOf(obj[toRemove]);
            if (pos >= 0) {
                this.search_result.splice(pos, 1);
            }
        }
        this.context.setState({ "RoomConditionPageState": this.current_items, "RoomConditionPageResultState": this.search_result });
    }

    handleClickConditionPage_t2(x, y, obj) {
        let toRemove;
        if (this.current_items[x][0] > 0) {
            toRemove = this.current_items[x][0];
        }
        this.current_items[x][0] = (this.current_items[x][0] === y) ? 0 : y;
        if (RoomConditionStr.sub[obj[y]] === undefined && this.current_items[x][0] > 0) {
            this.search_result.push(obj[y]);
        }
        if (toRemove) {
            const pos = this.search_result.indexOf(obj[toRemove]);
            if (pos >= 0) {
                this.search_result.splice(pos, 1);
            }
        }
        this.context.setState({ "RoomConditionPageState": this.current_items, "RoomConditionPageResultState": this.search_result });
    }

    getConditionPage_t2(parent, x, key, obj) {
        const items = [];
        let unikey = `condition_page_item_${x}`;
        items.push(<li className="rp_contition_title" key={unikey}>{key}:</li>);
        this.current_items.push([0, 0]);
        let subItem;
        for (let i = 0; i < obj.length; i++) {
            unikey = `condition_page_item_${x}_${i}`;
            if (this.current_items[x][0] === i && RoomConditionStr.sub[obj[i]]) {
                items.push(
                    <li className="rp_condition_item rp_normal_condition_item" key={unikey} onClick={() => this.handleClickConditionPage_t2(x, i, obj)}>
                        {obj[i]}
                    </li>
                );
                subItem = this.__getSubContiditionPage_t2(x, i, RoomConditionStr.sub[obj[i]])
            } else {
                const clazName = "rp_condition_item " + (this.current_items[x][0] === i ? "rp_select_condition_item" : "rp_normal_condition_item");
                items.push(<li className={clazName} key={unikey} onClick={() => this.handleClickConditionPage_t2(x, i, obj)}>{obj[i]}</li>);
            }
        }
        parent.push(<ul key={`condition_page_${x}`}>{items}</ul>);
        if (subItem) {
            parent.push(subItem);
        }
    }

    __getSubContiditionPage_t3(x, y, key) {
        const items = [];
        items.push(<option key={`condition_page_item_${x}_${y}_0`}>{key}</option>);
        for (let idx = 1; idx < RoomConditionStr.sub[key].length; idx++) {
            items.push(
                <option key={`condition_page_item_${x}_${y}_${idx}`}>
                    {RoomConditionStr.sub[key][idx]}
                </option>
            );
        }
        return (
            <select className="area" key={`condition_page_item_${x}_${y}`}>
                {items}
            </select>
        );
    }

    getConditionPage_t3(parent, x, key, obj) {
        const items = [];
        items.push(<li className="rp_contition_title" key={`condition_page_item_${x}`}>{key}:</li>);
        this.current_items.push([]);
        for (let i = 0; i < obj.length; i++) {
            this.current_items[x].push(0);
            items.push(this.__getSubContiditionPage_t3(x, i, obj[i]));
        }
        parent.push(<ul key={`condition_page_${x}`}>{items}</ul>);
    }

    get getSearchResultPage() {
        const items = [];
        this.search_result.forEach((o) => {
            items.push(
                <div className="tj_content" id="er" key={`condition_page_result_${o}`}>
                    <label className="second_hand_housing w12_1ch">{o}</label>
                    <button className="no"></button>
                </div>
            );
        });
        return (
            <ul className="result">
                < li className="rp_contition_title" > {RoomConditionStr.condition}</li >
                {items}
            </ul >
        );
    }

    get render() {
        const items = [];
        let idx = 0;
        for (let key in RoomConditionStr.main) {
            switch (RoomConditionStr.main[key].type) {
                case 1:
                    this.getConditionPage_t1(items, idx++, key, RoomConditionStr.main[key].content);
                    break;
                case 2:
                    this.getConditionPage_t2(items, idx++, key, RoomConditionStr.main[key].content);
                    break;
                case 3:
                    items.push(<div className="room_page_line" key={`condition_page_line_${idx}`}></div>);
                    this.getConditionPage_t3(items, idx++, key, RoomConditionStr.main[key].content);
                    break;
                default:
                    continue;
            }
        }
        return (
            <div className="condition_page">
                {items}
                <div className="room_page_line"></div>
                {this.getSearchResultPage}
            </div>
        );
    }
}

export default RoomConditionPage;