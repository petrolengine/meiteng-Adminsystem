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
// for debug
import TestRoomResult from '../resources/strings/test_room_result';

class RoomPage {
    constructor(context) {
        this.current_items = [];
        this.context = context;
        this.roomConditionPage = new RoomConditionPage(context);
        this.room_info = {
            data: TestRoomResult
        }
    }

    get renderResultSortTab() {
        return (
            <div className="rp_result_sort_tab">
                <label className="b20_1_ch" style={{ "marginLeft": "25px" }}>{CommonStr.default_sort}</label>
                <label className="b20_1_ch" style={{ "marginLeft": "75px" }}>{CommonStr.price_sort}</label>
                <label className="b20_1_ch" style={{ "marginLeft": "75px" }}>{CommonStr.date_sort}</label>
            </div>
        );
    }

    get renderSearchResultSummary() {
        return (
            <div className="rp_search_result_summary">
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
                <label className="B25_1_ch">{item.area + '  ' + item.huxing + '  ' + item.mianji}</label>
                <div className="b">
                    <img className="in_top" src={house} alt=''></img>
                    <label className="c666_15_1_ch m_l_6 in_top">
                        {item.area + '  ' + item.huxing + '  ' + item.mianji + '  ' + item.loucen + CommonStr.lou + '  ' + item.chaoxiang + '  ' + item.zhuangxiu}
                    </label>
                </div>
                <div className="b m_t_20">
                    <img className="in_top" src={address} alt=''></img>
                    <label className="deepblue15_1_ch in_top">{item.fujinshangquan}</label>
                    <label className="c666_15_1_ch m_l_8 in_top">{' - ' + item.address}</label>
                </div>
                <div className="b m_t_20">
                    <img className="in_top" src={landlord} alt=''></img>
                    <label className="c666_15_1_ch m_l_6 in_top">{CommonStr.fangdong + ': ' + item.fangdong + ' - '}</label>
                    <label className="deepblue15_1_ch in_top">{item.fangdongdianhua}</label>
                </div>
                <div className="b m_t_20">
                    <img className="in_top" src={buyer} alt=''></img>
                    <label className="c666_15_1_ch m_l_6 in_top">{CommonStr.guke + ': ' + item.guke + ' - '}</label>
                    <label className="deepblue15_1_ch in_top">{item.gukedianhua}</label>
                </div>
            </div >
        );
    }

    renderRoomPriceInfo(item) {
        return (
            <div className="rp_result_one_room_info_price in_middle">
                <button className="edition"></button>
                <label className="price">{item.shoujia}</label>
                <label className="unit_price">{CommonStr.danjia + ' ' + item.danjia}</label>
            </div>
        );
    }

    renderRoomStatusInfo(item) {
        return (
            <div className="rp_result_one_room_info_status in_middle">
                <button className="edition"></button>
                <div className="m_t_39 b">
                    <img className="in_top" src={sold} alt=''></img>
                    <label className="C666_23_3_ch in_top">
                        {item.state}
                        <label className="orange23_0_ch in_top">30</label>
                        {CommonStr.day}
                    </label>
                </div>
                <div className="m_t_39 b">
                    <img className="in_top m_l_5" src={saler} alt=''></img>
                    <label className="m_l_15 b15_1_ch in_top">{CommonStr.xiaoshourenyuan + ':  ' + item.chushouyuangong}</label>
                </div>
                <div className="m_t_16 b">
                    <img className="in_top m_l_5" src={sale_time} alt=''></img>
                    <label className="m_l_15 b15_1_ch in_top">{CommonStr.chushoushijian + ':  ' + item.chushoushijian}</label>
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
        const items = [];
        this.room_info.data.forEach((o) => {
            items.push(this.renderOneResult(o, items.length));
            items.push(<div className="line1_1" style={{ "marginTop": "5px" }} key={`rp_one_result_line_${items.length}`}></div>);
        });
        return (
            <div className="room_page">
                {this.roomConditionPage.render}
                {this.renderResultSortTab}
                <div className="line2_1"></div>
                {this.renderSearchResultSummary}
                <div className="line1_1" style={{ "marginTop": "5px" }}></div>
                {items}
            </div>
        );
    }
}

export default RoomPage;