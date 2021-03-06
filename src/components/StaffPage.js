import React from 'react';
import '../resources/css/label.css';
import '../resources/css/common.css';
import '../resources/css/StaffPage.css';
import '../resources/css/LandlordCustomerPage.css';
import obode from '../resources/images/browse_landlord/obode.png';
import house_source from '../resources/images/browse_landlord/house_source.png';
import remarks from '../resources/images/browse_landlord/remarks.png';
import name_icon from '../resources/images/browse_staff/staff_name.png';
import tele from '../resources/images/browse_landlord/tele.png';
import idnumber from '../resources/images/browse_landlord/idnumber.png';

import { PersonSex } from '../common/PersonType';
import CommonStr from '../resources/strings/common';
import { renderPage, onList1, onList2 } from '../common/Function';

export default class StaffPage {
    constructor(context) {
        this.context = context;
        this.prePage = 6;
        this.updateKey = "StaffPageInfo";
        this.url1 = "/users/GetStaffList";
        this.initialize();
    }

    renderOneResult(obj, idx) {
        const style = {};
        if (idx % 2 === 1) {
            style["float"] = "right";
        }
        return (
            <div className="staff_info_card in_top" style={style} key={`staff_page_item_${idx}`}>
                <div className="staff_portait in_middle m_l_5"></div>
                <div className="staff_page_content in_middle m_l_13" style={{ width: "190px" }}>
                    <div className="m_t_5 b m_t_35">
                        <img src={name_icon} className="in_middle" alt=""></img>
                        <label className="m_l_8 in_middle gray15_0_ch intop">{`${CommonStr.name}:`}</label>
                        <label className="m_l_8 in_middle gray15_0_ch intop">
                            {`${obj.name}-${PersonSex[obj.sex]}-${obj.age}${CommonStr.sui}`}
                        </label>
                    </div>
                    <div className="m_t_5 b">
                        <img src={tele} className="in_middle" alt=""></img>
                        <label className="m_l_13 in_middle gray15_0_ch">{`${CommonStr.phone}:`}</label>
                        <label className="m_l_8 in_middle gray15_0_ch">{obj.phone}</label>
                    </div>
                    <div className="m_t_5 b">
                        <img src={obode} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{`${CommonStr.native_place}:`}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{obj.native_place}</label>
                    </div>
                </div>
                <div className="staff_page_content in_middle" style={{ width: "290px" }}>
                    <div className="m_t_5 b">
                        <img src={idnumber} className="in_middle" alt=""></img>
                        <label className="m_l_8 in_middle gray15_0_ch">{`${CommonStr.id_card}:`}</label>
                        <label className="m_l_8 in_middle gray15_0_ch">{obj.id_card}</label>
                    </div>
                    <div className="m_t_5 b">
                        <img src={house_source} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{`${CommonStr.yeji}:`}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{CommonStr.yizu}</label>
                        <label className="m_l_2 orange15_1_ch in_middle">{obj.yizu}</label>
                        <label className="m_l_2 b15_1_ch in_middle">{CommonStr.yishou}</label>
                        <label className="m_l_2 orange15_1_ch in_middle">{obj.yishou}</label>
                        <label className="m_l_2 b15_1_ch in_middle">{CommonStr.daizu}</label>
                        <label className="m_l_2 orange15_1_ch in_middle">{obj.daizu}</label>
                        <label className="m_l_2 b15_1_ch in_middle">{CommonStr.daishou}</label>
                        <label className="m_l_2 orange15_1_ch in_middle">{obj.daishou}</label>
                    </div>
                    <div className="m_t_5 b">
                        <img src={remarks} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{`${CommonStr.remarks}:`}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{obj.remarks}</label>
                    </div>
                </div>
                <button className="landlord_page_edit edit_button in_top"></button>
                <label className="staff_last_time gray10_0_ch b">{obj.create_time}</label>
            </div>
        );
    }

    get render() {
        if (this.info.data.length === 0) {
            this.get_data_from_server(this.url1);
        }
        const items = [];
        this.info.data.forEach((o) => {
            items.push(this.renderOneResult(o, items.length));
        });
        return (
            <div className="b">
                {items}
                {renderPage(this)}
            </div>
        );
    }

    on_loadend(data) {
        switch (data.key) {
            case "/GetStaffList":
                onList1(this, data);
                break;
            case "/GetStaffList2":
                onList2(this, data);
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

    search() {
        this.get_data_from_server("/users/GetStaffList2");
    }

    initialize() {
        this.info = {
            data: [],
            totalPage: Math.ceil(this.context.totals.staff / this.prePage),
            curPage: 0,
            searchKey: "",
        }
    }
}