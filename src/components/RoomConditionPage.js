import React from 'react';
import RoomConditionStr from '../resources/strings/condition';
import '../resources/css/RoomConditionPage.css';
import '../resources/css/line.css';
import '../resources/css/common.css';
import arrow from '../resources/images/sale_page/arrow.png';

class RoomConditionPage {
    constructor(context) {
        this.current_items = [];
        this.search_result = [];
        for (let key in RoomConditionStr.main) {
            switch (RoomConditionStr.main[key].type) {
                case 1:
                    this.current_items.push(0);
                    break;
                case 2:
                    this.current_items.push([0, 0]);
                    break;
                case 3:
                    this.current_items.push([]);
                    break;
                default:
                    break;
            }
            this.search_result.push([]);
        }
        this.context = context;
    }

    handleClickConditionPage_t1(x, y, arr) {
        this.current_items[x] = (this.current_items[x] === y) ? 0 : y;
        if (this.search_result[x].length > 0) {
            this.search_result[x].splice(0, 1);
        }
        if (this.current_items[x] > 0) {
            this.search_result[x].push(arr[y]);
        }
        this.context.setState({ "RoomConditionPageState": this.current_items, "RoomConditionPageResultState": this.search_result });
    }

    getConditionPage_t1(parent, x, key, obj) {
        const items = [];
        let unikey = `rcpc_item_${x}`;
        items.push(<li className="rpcp_contition_title" key={unikey}>{key}:</li>);
        for (let i = 0; i < obj.length; i++) {
            unikey = `rcpc_item_${x}_${i}`;
            const clazName = "rpcp_condition_item " + (this.current_items[x] === i ? "rpcp_select_condition_item" : "rpcp_normal_condition_item");
            items.push(<li className={clazName} key={unikey} onClick={() => this.handleClickConditionPage_t1(x, i, obj)}>{obj[i]}</li>);
        }
        parent.push(<ul key={`rcpc_${x}`}> {items}</ul>);
    }

    __getSubContiditionPage_t2(x, y, obj) {
        const items = [];
        const leftM = ["0", "75px", "129px", "179px", "233px", "285px", "338px"];
        for (let i = 0; i < obj.length; i++) {
            const clazName = "rpcp_condition_item " + (this.current_items[x][1] === i ? "rpcp_select_condition_item" : "rpcp_normal_condition_item");
            const key = `rpcp_subpage_${x}_${y}_${i}`
            const cb = () => this.handleClickSubConditionPage_t2(x, i, obj)
            items.push(
                <li className={clazName} key={key} onClick={cb} style={{ marginTop: "8px" }}>
                    {obj[i]}
                </li>
            );
        }
        return (
            <div className="rpcp_contition_sub_collection" key={`rpcp_subpage_${x}_${y}`}>
                <img src={arrow} style={{ marginLeft: leftM[y] }} alt=""></img>
                <ul className="rpcp_inner_frame">{items}</ul>
            </div>
        );
    }

    handleClickSubConditionPage_t2(x, y, obj) {
        this.current_items[x][1] = y;
        if (this.search_result[x].length > 0) {
            this.search_result[x].splice(0, 1);
        }
        if (this.current_items[x][1] > 0) {
            this.search_result[x].push(obj[y]);
        }
        this.context.setState({ "RoomConditionPageState": this.current_items, "RoomConditionPageResultState": this.search_result });
    }

    handleClickConditionPage_t2(x, y, obj) {
        this.current_items[x][0] = (this.current_items[x][0] === y) ? 0 : y;
        this.current_items[x][1] = 0;
        if (this.search_result[x].length > 0) {
            this.search_result[x].splice(0, 1);
        }
        if (RoomConditionStr.sub[obj[y]] === undefined && this.current_items[x][0] > 0) {
            this.search_result[x].push(obj[y]);
        }
        this.context.setState({ "RoomConditionPageState": this.current_items, "RoomConditionPageResultState": this.search_result });
    }

    getConditionPage_t2(parent, x, key, obj) {
        const items = [];
        let unikey = `rpcp_item_${x}`;
        items.push(<li className="rpcp_contition_title" key={unikey}>{key}:</li>);
        let subItem;
        for (let i = 0; i < obj.length; i++) {
            unikey = `rpcp_item_${x}_${i}`;
            const clazName = "rpcp_condition_item " + (this.current_items[x][0] === i ? "rpcp_select_condition_item" : "rpcp_normal_condition_item");
            if (this.current_items[x][0] === i && RoomConditionStr.sub[obj[i]]) {
                items.push(
                    <li className={clazName} key={unikey} onClick={() => this.handleClickConditionPage_t2(x, i, obj)}>
                        {obj[i]}
                    </li>
                );
                subItem = this.__getSubContiditionPage_t2(x, i, RoomConditionStr.sub[obj[i]])
            } else {
                items.push(<li className={clazName} key={unikey} onClick={() => this.handleClickConditionPage_t2(x, i, obj)}>{obj[i]}</li>);
            }
        }
        parent.push(<ul key={`rpcp_${x}`}>{items}</ul>);
        if (subItem) {
            parent.push(subItem);
        }
    }

    __getSubContiditionPage_t3(x, y, key) {
        const items = [];
        items.push(<option key={`rpcp_item_${x}_${y}_0`}>{key}</option>);
        for (let idx = 1; idx < RoomConditionStr.sub[key].length; idx++) {
            items.push(
                <option key={`rpcp_item_${x}_${y}_${idx}`}>
                    {RoomConditionStr.sub[key][idx]}
                </option>
            );
        }
        return (
            <select className="rpcp_contition_page_style3" key={`rpcp_item_${x}_${y}`}>
                {items}
            </select>
        );
    }

    getConditionPage_t3(parent, x, key, obj) {
        const items = [];
        items.push(<li className="rpcp_contition_title" key={`rpcp_item_${x}`}>{key}:</li>);
        for (let i = 0; i < obj.length; i++) {
            this.current_items[x].push(0);
            items.push(this.__getSubContiditionPage_t3(x, i, obj[i]));
        }
        parent.push(<ul key={`rpcp_${x}`}>{items}</ul>);
    }

    onClickCloseResult(idx) {
        this.search_result[idx].splice(0, 1)
        switch (typeof (this.current_items[idx])) {
            case 'number':
                this.current_items[idx] = 0;
                break;
            case 'object':
                this.current_items[idx][0] = 0;
                break;
            default:
                break;
        }
        this.context.setState({ "RoomConditionPageState": this.current_items, "RoomConditionPageResultState": this.search_result });
    }

    get getSearchResultPage() {
        const items = [];
        for (let idx = 0; idx < this.search_result.length; idx++) {
            const o = this.search_result[idx];
            if (o.length > 0) {
                items.push(
                    <div className="rcpc_one_search_result  in_top" key={`rpcp_result_${o[0]}`}>
                        <label className="rcpc_search_result_label w12_1ch in_top">{o[0]}</label>
                        <button className="rcpc_search_result_close_btn in_top" onClick={() => this.onClickCloseResult(idx)} />
                    </div>
                );
            }
        }
        return (
            <ul>
                <li className="rpcp_contition_title in_top" style={{ "height": "25px" }}> {RoomConditionStr.condition}</li>
                {items}
            </ul>
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
                    items.push(<div className="line1_1" style={{ "marginTop": "15px" }} key={`rpcp_line_${idx}`}></div>);
                    this.getConditionPage_t3(items, idx++, key, RoomConditionStr.main[key].content);
                    break;
                default:
                    continue;
            }
        }
        return (
            <div className="rp_condition_page">
                {items}
                <div className="line1_1" style={{ "marginTop": "15px" }}></div>
                {this.getSearchResultPage}
            </div>
        );
    }
}

export default RoomConditionPage;