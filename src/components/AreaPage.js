import React from 'react';
import '../resources/css/LandlordCustomerPage.css';
import '../resources/css/AreaPage.css';
import '../resources/css/label.css';
import '../resources/css/common.css';

import { renderPage } from '../common/Function';
import CommonStr from '../resources/strings/common';

import environment from '../resources/images/browse_community/environment.png';
import environment2 from '../resources/images/browse_community/environment2.png';
import address from '../resources/images/browse_community/address.png';
import around_area from '../resources/images/browse_community/around_area.png';
import transport from '../resources/images/browse_community/transport.png';

import TestAreaStr from '../resources/strings/test_area';


export default class AreaPage {
    constructor(context) {
        this.context = context;
        this.info = {
            data: [],
            totalPage: 5,
            curPage: 1,
        }
        this.info.data = TestAreaStr;
    }

    renderOneResult(obj, idx) {
        const items = [];
        obj.tags.forEach((o) => items.push(
            <label className="area_page_symbol_content orange15_0_ch in_top" key={`area_page_symbol_${items.length}`}>{o}</label>
        ));
        return (
            <div className="area_page_card b" key={`area_page_${idx}`}>
                <img className="area_page_prev_image in_middle m_t_16 m_l_16" src={environment} alt="" />
                <img className="area_page_prev_image in_middle m_t_16 m_l_6" src={environment2} alt="" />
                <div className="in_middle m_l_8" style={{ width: "390px" }}>
                    <label className="textalign_c b20_1_ch b">{obj.name}</label>
                    <div className="b m_t_16">
                        <img className="in_middle" src={address} alt="" />
                        <label className="gray15_1_ch in_middle m_l_5">{`${CommonStr.xiaoquweizhi}: ${obj.address}`}</label>
                    </div>
                    <div className="b m_t_12">
                        <img className="in_middle" src={around_area} alt="" />
                        <label className="gray15_1_ch in_middle m_l_5">{`${CommonStr.zhoubianpeitao}: ${obj.zhoubianpeitao}`}</label>
                    </div>
                    <div className="b m_t_12">
                        <img className="in_middle" src={transport} alt="" />
                        <label className="gray15_1_ch in_middle m_l_5">{`${CommonStr.jiaotongchuxing}: ${obj.jiaotongchuxing}`}</label>
                    </div>
                </div>
                <div className="in_middle" style={{ width: "330px" }}>
                    {items}
                </div>
                <button className="edit_button in_top fr m_t_2 m_r_2"></button>
                <label className="b gray10_0_ch m_r_2 fr">{obj.datetime}</label>
            </div>
        );
    }

    get render() {
        if (this.info.data.length === 0) {
            this.get_data_from_server();
        }
        const items = [];
        this.info.data.forEach((o) => items.push(this.renderOneResult(o, items.length)));
        return (
            <div className="b">
                {items}
                {renderPage(this.info.totalPage, this.info.curPage)}
            </div>
        );
    }

    on_loadend(data) {
        if (this.info.data.length !== data.length || data.length > 0) {
            this.info.data = data;
            const key = "AreaPageInfo";
            const temp = {};
            temp[key] = this.info;
            this.context.setState(temp);
        }
    }

    on_error(code, data) {
        console.log(code, data);
    }

    get_data_from_server() {
        const url = "/users/GetAreaList";
        const params = {
            page: this.info.curPage,
            prePage: 6,
        };
        this.context.requesthdr.send_message(url, params, this);
    }
}