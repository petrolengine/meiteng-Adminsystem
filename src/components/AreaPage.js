import React from 'react';
import '../resources/css/LandlordCustomerPage.css';
import '../resources/css/AreaPage.css';
import '../resources/css/label.css';
import '../resources/css/common.css';

import { renderPage } from '../common/Function';
import CommonStr from '../resources/strings/common';

// for debug
import TestArea from '../resources/strings/test_area';

export default class AreaPage {
    constructor(context) {
        this.context = context;
        this.info = {
            data: TestArea,
            totalPage: 5,
            curPage: 1,
        }
    }

    renderOneResult(obj, idx) {
        const items = [];
        obj.tags.forEach((o) => items.push(<label className="community_symbol_content orange15_0_ch in_top">{o}</label>));
        return (
            <div className="browse_community_card b" key={`area_page_${idx}`}>
                <div className="community_img in_top"></div>
                <div className="community_img2 in_top"></div>
                <div className="community_info_icon in_top">
                    <div className="community_location"></div>
                    <div className="community_around b"></div>
                    <div className="community_transport b"></div>
                </div>
                <label className="community_name b20_1_ch in_top">{obj.name}</label>
                <div className="community_info_content in_top">
                    <label className="community_info_location gray15_1_ch b">{`${CommonStr.xiaoquweizhi}: ${obj.address}`}</label>
                    <label className="community_info_location gray15_1_ch b">{`${CommonStr.zhoubianpeitao}: ${obj.zhoubianpeitao}`}</label>
                    <label className="community_info_location gray15_1_ch b">{`${CommonStr.jiaotongchuxing}: ${obj.jiaotongchuxing}`}</label>
                </div>
                <div className="community_symbol in_top">
                    {items}
                </div>
                <button className="edit_button in_top"></button>
                <label className="browse_community_date b gray10_0_ch">{obj.datetime}</label>
            </div>
        );
    }

    get render() {
        const items = [];
        this.info.data.forEach((o) => items.push(this.renderOneResult(o, items.length)));
        return (
            <div className="b">
                {items}
                {renderPage(this.info.totalPage, this.info.curPage)}
            </div>
        );
    }
}