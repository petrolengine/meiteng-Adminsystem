import React from 'react';
import '../resources/css/common.css';
import '../resources/css/label.css';
import '../resources/css/LandlordPage.css';
import { renderPage } from '../common/Function';
import CommonStr from '../resources/strings/common';
import tele from '../resources/images/browse_landlord/tele.png';
import idnumber from '../resources/images/browse_landlord/idnumber.png';
import obode from '../resources/images/browse_landlord/obode.png';
import house_source from '../resources/images/browse_landlord/house_source.png';
import remarks from '../resources/images/browse_landlord/remarks.png';
// for debug
import TestLandlord from '../resources/strings/test_landlord';

export default class LandlordPage {
    constructor(context) {
        this.context = context;
        this.info = {
            data: TestLandlord,
            totalPage: 5,
            curPage: 1,
        }
    }

    renderOneResult(obj, idx) {
        const style = {};
        if (idx % 2 === 1) {
            style["float"] = "right";
        }
        return (
            <div className="in_top landlord_info_card" style={style} key={`landlord_item_${idx}`}>
                <div className="landlord_info_name in_middle">
                    <label className="b15_1_ch in_top person_name">{obj.name}</label>
                    <label className="gray10_1_ch in_top person_age">{obj.age + CommonStr.sui}</label>
                    <div className="landlord_sex"></div>
                </div>
                <div className="landlord_mian_info in_top">
                    <div className="m_t_5 b">
                        <img src={tele} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{CommonStr.phone + ":"}</label>
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
                    <div className="m_t_5 b">
                        <img src={remarks} className="in_middle" alt=""></img>
                        <label className="m_l_8 gray15_1_ch in_middle">{CommonStr.remarks + ":"}</label>
                        <label className="m_l_8 b15_1_ch in_middle">{obj.remarks}</label>
                    </div>
                </div>
                <button className="landlord_edit"></button>
                <label className="landlord_last_time gray10_1_ch">{obj.datetime}</label>
            </div >
        );
    }

    get render() {
        const items = [];
        this.info.data.forEach((o) => {
            items.push(this.renderOneResult(o, items.length));
        });
        return (
            <div>
                <div className="b browse_filter">
                    <button className="in_middle filter_male"></button>
                    <button className="in_middle filter_female"></button>
                    <button className="in_middle filter_rent"></button>
                    <button className="in_middle filter_sales"></button>
                    <div className="in_middle vertical_line line1"></div>
                    <div className="in_middle vertical_line line2"></div>
                </div>
                {items}
                {renderPage(this.info.totalPage, this.info.curPage)}
            </div>
        );
    }
}