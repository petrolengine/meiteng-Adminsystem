import React from 'react';
import '../resources/css/common.css';
import '../resources/css/add_sales.css';
import '../resources/css/label.css';
import '../resources/css/browse_landlord.css';
import CommonStr from '../resources/strings/common';
// for debug
import TestLandlord from '../resources/strings/test_landlord';

export default class LandlordPage {
    constructor(context) {
        this.context = context;
        this.info = {
            data: TestLandlord,
        }
    }

    renderOneResult(obj, idx) {
        return (
            <div className="b landlord_info_card" key={`landlord_item_${idx}`}>
                <div className="landlord_info_name in_middle">
                    <label className="b15_1_ch in_top person_name">{obj.name}</label>
                    <label className="gray10_1_ch in_top person_age">{obj.age + CommonStr.sui}</label>
                    <div className="landlord_sex"></div>
                </div>
                <div className="landlord_info_icon in_top">
                    <div className="tele_img deviation b"></div>
                    <div className="identity_img deviation b"></div>
                    <div className="obode_img deviation b"></div>
                    <div className="house_resourde_img deviation b"></div>
                    <div className="commands_img deviation b"></div>
                </div>
                <div className="landlord_mian_info in_top">
                    <label className="landlord_tele gray15_1_ch b">{CommonStr.phone + ": " + obj.phone}</label>
                    <label className="landlord_tele gray15_1_ch b">{CommonStr.id_card + ": " + obj.id_card}</label>
                    <label className="landlord_tele gray15_1_ch b">{CommonStr.native_place + ": " + obj.native_place}</label>
                    <label className="landlord_tele gray15_1_ch b">{CommonStr.resources + ": "}
                        <label className="b15_1_ch in_top">{CommonStr.yizu + "   " + CommonStr.yishou + "   " + CommonStr.daizu + "   " + CommonStr.daishou}</label>
                        <label className="b15_1_ch in_top house_num">{obj.yizu + "   " + obj.yishou + "   " + obj.daizu + "   " + obj.daishou}</label>
                    </label>
                    <label className="landlord_tele gray15_1_ch in_top">{CommonStr.remarks + ": " + obj.remarks}</label>
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
            <dev>
                <div className="b browse_filter">
                    <button className="in_middle filter_male"></button>
                    <button className="in_middle filter_female"></button>
                    <button className="in_middle filter_rent"></button>
                    <button className="in_middle filter_sales"></button>
                    <div className="in_middle vertical_line line1"></div>
                    <div className="in_middle vertical_line line2"></div>
                </div>
                {items}
                <div className="browse_landlord_page b">
                    <button className="arrow_left in_top"></button>
                    <button className="num_1 in_top b15_1_ch">1</button>
                    <button className="num_1 in_top b15_1_ch">2</button>
                    <button className="num_1 in_top b15_1_ch">3</button>
                    <button className="arrow_right in_top"></button>
                </div>
            </dev>
        );
    }
}