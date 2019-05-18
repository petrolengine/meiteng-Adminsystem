import React from 'react';
import RoomConditionPage from './RoomConditionPage';
import CommonStr from '../resources/strings/common';
import '../resources/css/line.css';
import '../resources/css/label.css';
import '../resources/css/common.css';
import '../resources/css/RoomPage.css';
import house from '../resources/images/sale_page/house.png';
import address from '../resources/images/sale_page/address.png';
import landlord from '../resources/images/sale_page/landlord.png';
import buyer from '../resources/images/sale_page/buyer.png';
import saler from '../resources/images/sale_page/saler.png';
import sale_time from '../resources/images/sale_page/sale_time.png';
import default_house_pic from '../resources/images/sale_page/house_pic.png';
import sold from '../resources/images/sale_page/sold.png';
import { renderPage, onList1, getHuxing, getMianji, getLouCen, getDirection, getDecorate, getRoomState } from '../common/Function';
import AddRoomStr from '../resources/strings/add_room';

class RoomPage {
    constructor(context, bsale) {
        this.current_items = [];
        this.context = context;
        this.roomConditionPage = new RoomConditionPage(context);
        this.prePage = 6;
        this.updateKey = bsale ? "RoomSalePageInfo" : "RoomRentPageInfo";
        this.url1 = bsale ? "/users/GetRoomSaleList" : "/users/GetRoomRentList";
        this.initialize();
    }

    onClickResultSortStyle(idx) {
        const temp = {};
        this.info.result_sort_style = idx;
        temp[this.updateKey] = this.info;
        this.context.setState(temp);
    }

    get renderResultSortTab() {
        const items = [];
        for (let idx = 0; idx < CommonStr.sort_style.length; idx++) {
            const o = CommonStr.sort_style[idx];
            const clazName = (this.info.result_sort_style === idx ? "w20_1_ch orange_bg" : "b20_1_ch") + " in_top rp_search_result_style";
            items.push(<label className={clazName} onClick={() => this.onClickResultSortStyle(idx)} key={`rp_result_sort_${idx}`} > {o}</label>);
        }
        return (<div className="b" style={{ "marginTop": "30px" }}>{items}</div>);
    }

    get renderSearchResultSummary() {
        return (
            <div className="b" style={{ "marginTop": "21px" }}>
                <label className="gray15_1_ch">
                    {CommonStr.search_result_1}
                    <label className="orange15_1_ch">86</label>
                    {CommonStr.search_result_2}
                </label>
            </div>
        );
    }

    renderRoomBaseInfo(item) {
        return (
            <div className="rp_result_one_room_info_text in_middle">
                <label className="B25_1_ch">{`${item.area}  ${getHuxing(item)}  ${getMianji(item)}`}</label>
                <div className="b m_t_16">
                    <img className="i" src={house} alt=''></img>
                    <label className="c666_15_1_ch m_l_6 i">
                        {`${item.area} ${getHuxing(item)} ${getMianji(item)} ${getLouCen(item)} ${getDirection(item)} ${getDecorate(item)}`}
                    </label>
                </div>
                <div className="b m_t_12">
                    <img className="i" src={address} alt=''></img>
                    <label className="c666_15_1_ch m_l_8 i">{item.fujinshangquan}</label>
                    <label className="c666_15_1_ch m_l_6 i">{' - ' + item.address}</label>
                </div>
                <div className="b m_t_12">
                    <img className="i" src={landlord} alt={CommonStr.landlord}></img>
                    <label className="c666_15_1_ch m_l_6 i">{`${CommonStr.landlord}: ${item.landlord} - ${item.phone}`}</label>
                </div>
                <div className="b m_t_12">
                    <img className="i" src={buyer} alt={CommonStr.tenant}></img>
                    <label className="c666_15_1_ch m_l_6 i">{`${CommonStr.tenant}: ${item.guke} - ${item.gukedianhua}`}</label>
                </div>
            </div >
        );
    }

    renderRoomPriceInfo(item) {
        return (
            <div className="rp_result_one_room_info_price in_middle">
                <button className="rp_result_one_edition"></button>
                <label className="rp_result_one_price">{item.shoujia}</label>
                <label className="rp_result_one_unit_price">{`${CommonStr.danjia} ${item.unit_price}${AddRoomStr.yuan_pingmi}`}</label>
            </div>
        );
    }

    renderRoomStatusInfo(item) {
        return (
            <div className="rp_result_one_room_info_status in_middle">
                <button className="rp_result_one_edition"></button>
                <div className="m_t_35 b">
                    <img className="in_center" src={sold} alt=''></img>
                    <label className="C666_23_3_ch in_center m_l_8">{getRoomState(item)}</label>
                    <label className="orange23_0_ch in_center">30</label>
                    <label className="C666_23_3_ch in_center m_l_5">{CommonStr.day}</label>
                </div>
                <div className="m_t_35 b">
                    <img className="i m_l_5" src={saler} alt=''></img>
                    <label className="m_l_6 c666_15_1_ch i">{CommonStr.xiaoshourenyuan + ':  ' + item.chushouyuangong}</label>
                </div>
                <div className="m_t_16 b">
                    <img className="i m_l_5" src={sale_time} alt=''></img>
                    <label className="m_l_6 c666_15_1_ch i">{CommonStr.chushoushijian + ':  ' + item.chushoushijian}</label>
                </div>
            </div>
        );
    }

    renderOneResult(item, idx) {
        return (
            <div className="rp_result_one_room" key={`rp_one_result_room_${idx}`}>
                <img className="in_middle" src={item.house_img || default_house_pic} alt={item.area}></img>
                {this.renderRoomBaseInfo(item)}
                {this.renderRoomPriceInfo(item)}
                <div className="rp_result_one_room_split_line in_middle"></div>
                {this.renderRoomStatusInfo(item)}
            </div >
        );
    }

    get render() {
        if (this.info.data.length === 0) {
            this.get_data_from_server(this.url1);
        }
        const items = [];
        this.info.data.forEach((o) => {
            if (items.length > 0) {
                items.push(<div className="line1_1" style={{ "marginTop": "38px", "marginBottom": "38px" }} key={`rp_one_result_line_${items.length}`}></div>);
            }
            items.push(this.renderOneResult(o, items.length));
        });
        return (
            <div className="b">
                {this.roomConditionPage.render}
                {this.renderResultSortTab}
                <div className="line2_1"></div>
                {this.renderSearchResultSummary}
                {items}
                {renderPage(this)}
            </div>
        );
    }

    on_loadend(data) {
        console.log(data);
        switch (data.key) {
            case "/GetRoomSaleList":
                onList1(this, data);
                break;
            default:
                break;
        }
    }

    on_error(code, data) {
        console.log(code, data);
    }

    get_data_from_server(url) {
        const params = {
            page: this.info.curPage,
            prePage: this.prePage,
            key: this.info.searchKey,
        };
        this.context.requesthdr.send_message(url, params, this);
    }

    initialize() {
        this.info = {
            data: [],
            result_sort_style: 0,
            totalPage: Math.ceil(this.context.totals.staff / this.prePage),
            curPage: 0,
        }
    }
}

export default RoomPage;