import React from 'react';

import '../resources/css/common.css';
import '../resources/css/label.css';
import '../resources/css/LandlordCustomerPage.css';
import tele from '../resources/images/browse_landlord/tele.png';
import idnumber from '../resources/images/browse_landlord/idnumber.png';
import obode from '../resources/images/browse_landlord/obode.png';
import house_source from '../resources/images/browse_landlord/house_source.png';
import remarks from '../resources/images/browse_landlord/remarks.png';
import s_male_o from '../resources/images/browse_landlord/s_male_o.png';
import s_female_o from '../resources/images/browse_landlord/s_female_o.png';

import PersonType from "../common/PersonType";
import { renderPage } from '../common/Function';
import CommonStr from '../resources/strings/common';


export default class LandlordCustomerPage {
    constructor(context, person_type) {
        this.context = context;
        this.person_type = person_type;
        this.info = {
            data: [],
            totalPage: 5,
            curPage: 1,
        }
    }

    get renderBrowseFilter() {
        return (
            <div className="b landlord_page_browse_filter">
                <div className="in_top m_l_8">
                    <input type="checkbox" id="landlord_page_filter_male"></input>
                    <label className="landlord_page_filter_male in_middle" htmlFor="landlord_page_filter_male"></label>
                    <div className="in_middle landlord_page_filter_vertical_line m_l_8 m_r_8"></div>
                    <input type="checkbox" id="landlord_page_filter_female"></input>
                    <label className="landlord_page_filter_female in_middle" htmlFor="landlord_page_filter_female"></label>
                </div>
                <div className="in_top fr m_r_8">
                    <input type="checkbox" id="landlord_page_filter_rent"></input>
                    <label className="landlord_page_filter_rent in_middle" htmlFor="landlord_page_filter_rent"></label>
                    <div className="in_middle landlord_page_filter_vertical_line m_l_8 m_r_8"></div>
                    <input type="checkbox" id="landlord_page_filter_sales"></input>
                    <label className="landlord_page_filter_sales in_middle" htmlFor="landlord_page_filter_sales"></label>
                </div>
            </div >
        );
    }

    personResources(obj) {
        if (PersonType.LANDLORD === this.person_type) {
            return (
                <div className="m_t_5 b">
                    <img src={house_source} className="in_middle" alt=""></img>
                    <label className="m_l_8 gray15_1_ch in_middle">{CommonStr.resources + ":"}</label>
                    <label className="m_l_8 b15_1_ch in_middle">{CommonStr.yizu}</label>
                    <label className="m_l_5 orange15_1_ch in_middle">{obj.yizu}</label>
                    <label className="m_l_5 b15_1_ch in_middle">{CommonStr.yishou}</label>
                    <label className="m_l_5 orange15_1_ch in_middle">{obj.yishou}</label>
                    <label className="m_l_5 b15_1_ch in_middle">{CommonStr.daizu}</label>
                    <label className="m_l_5 orange15_1_ch in_middle">{obj.daizu}</label>
                    <label className="m_l_5 b15_1_ch in_middle">{CommonStr.daishou}</label>
                    <label className="m_l_5 orange15_1_ch in_middle">{obj.daishou}</label>
                </div>
            );
        }
        return (
            <div className="m_t_5 b">
                <img src={house_source} className="in_middle" alt=""></img>
                <label className="m_l_8 gray15_1_ch in_middle">{CommonStr.consume + ":"}</label>
                <label className="m_l_8 b15_1_ch in_middle">{CommonStr.zufang}</label>
                <label className="m_l_5 orange15_1_ch in_middle">{obj.zufang}</label>
                <label className="m_l_5 b15_1_ch in_middle">{CommonStr.maifang}</label>
                <label className="m_l_5 orange15_1_ch in_middle">{obj.maifang}</label>
            </div>
        );
    }

    renderOneResult(obj, idx) {
        const style = {};
        if (idx % 2 === 1) {
            style["float"] = "right";
        }
        return (
            <div className="in_top landlord_page_info_card" style={style} key={`landlord_item_${idx}`}>
                <div className="landlord_page_info_name in_middle">
                    <label className="b b15_1_ch textalign_c m_t_16">{obj.name}</label>
                    <label className="b gray10_1_ch textalign_c m_t_5">{obj.age + CommonStr.sui}</label>
                    <img className="b m_t_5 m_l_r_auto" src={obj.sex === 0 ? s_female_o : s_male_o} alt=""></img>
                </div>
                <div className="landlord_page_mian_info in_top">
                    <div className="m_t_5 b">
                        <img src={tele} className="in_middle" alt=""></img>
                        <label className="m_l_13 gray15_1_ch in_middle">{CommonStr.phone + ":"}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{obj.phone}</label>
                    </div>
                    <div className="m_t_5 b">
                        <img src={idnumber} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{CommonStr.id_card + ":"}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{obj.id_card}</label>
                    </div>
                    <div className="m_t_5 b">
                        <img src={obode} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{CommonStr.native_place + ":"}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{obj.native_place}</label>
                    </div>
                    {this.personResources(obj)}
                    <div className="m_t_5 b">
                        <img src={remarks} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{CommonStr.remarks + ":"}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{obj.remarks}</label>
                    </div>
                </div>
                <button className="edit_button landlord_page_edit"></button>
                <label className="landlord_page_last_time gray10_1_ch">{obj.datetime}</label>
            </div>
        );
    }

    get render() {
        if (this.info.data.length === 0) {
            this.get_data_from_server();
        }
        const items = [];
        this.info.data.forEach((o) => {
            items.push(this.renderOneResult(o, items.length));
        });
        return (
            <div className="b">
                {this.renderBrowseFilter}
                {items}
                {renderPage(this.info.totalPage, this.info.curPage)}
            </div>
        );
    }

    on_loadend(data) {
        this.info.data = data;
        const key = PersonType.LANDLORD === this.person_type ? "LandlordPageInfo" : "CustomerPageInfo";
        const temp = {};
        temp[key] = this.info;
        this.context.setState(temp);
    }

    on_error(code, data) {
        console.log(code, data);
    }

    get_data_from_server() {
        const url = PersonType.LANDLORD === this.person_type ? "/users/GetLandlordList" : "/users/GetCustomerList";
        const params = {
            page: this.info.curPage,
            prePage: 6,
        };
        this.context.requesthdr.send_message(url, params, this);
    }
}