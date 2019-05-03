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
            data: TestRoomResult,
            result_sort_style: 0
        }
    }

    onClickResultSortStyle(idx) {
        this.room_info.result_sort_style = idx;
        this.context.setState({ "room_info": this.room_info });
    }

    get renderResultSortTab() {
        const items = [];
        for (let idx = 0; idx < CommonStr.sort_style.length; idx++) {
            const o = CommonStr.sort_style[idx];
            const clazName = (this.room_info.result_sort_style === idx ? "w20_1_ch orange_bg" : "b20_1_ch") + " in_top rp_search_result_style";
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
                <label className="B25_1_ch">{item.area + '  ' + item.huxing + '  ' + item.mianji}</label>
                <div className="b m_t_16">
                    <img className="i" src={house} alt=''></img>
                    <label className="c666_15_1_ch m_l_6 i">
                        {item.area + '  ' + item.huxing + '  ' + item.mianji + '  ' + item.loucen + CommonStr.lou + '  ' + item.chaoxiang + '  ' + item.zhuangxiu}
                    </label>
                </div>
                <div className="b m_t_12">
                    <img className="i" src={address} alt=''></img>
                    <label className="c666_15_1_ch m_l_8 i">{item.fujinshangquan}</label>
                    <label className="c666_15_1_ch m_l_6 i">{' - ' + item.address}</label>
                </div>
                <div className="b m_t_12">
                    <img className="i" src={landlord} alt=''></img>
                    <label className="c666_15_1_ch m_l_6 i">{CommonStr.fangdong + ': ' + item.fangdong}</label>
                    <label className="c666_15_1_ch m_l_6 i">{' - ' + item.fangdongdianhua}</label>
                </div>
                <div className="b m_t_12">
                    <img className="i" src={buyer} alt=''></img>
                    <label className="c666_15_1_ch m_l_6 i">{CommonStr.guke + ': ' + item.guke}</label>
                    <label className="c666_15_1_ch m_l_6 i">{' - ' + item.gukedianhua}</label>
                </div>
            </div >
        );
    }

    renderRoomPriceInfo(item) {
        return (
            <div className="rp_result_one_room_info_price in_middle">
                <button className="rp_result_one_edition"></button>
                <label className="rp_result_one_price">{item.shoujia}</label>
                <label className="rp_result_one_unit_price">{CommonStr.danjia + ' ' + item.danjia}</label>
            </div>
        );
    }

    renderRoomStatusInfo(item) {
        return (
            <div className="rp_result_one_room_info_status in_middle">
                <button className="rp_result_one_edition"></button>
                <div className="m_t_35 b">
                    <img className="in_center" src={sold} alt=''></img>
                    <label className="C666_23_3_ch in_center m_l_8">{item.state}</label>
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
        const items = [];
        this.room_info.data.forEach((o) => {
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
            </div>
        );
    }

    initialize() {

    }
}

export default RoomPage;