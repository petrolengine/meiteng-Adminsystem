import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/AddPage.css';
import '../resources/css/common.css';

export default class AddAreaPage {
    constructor(context) {
        this.context = context;
        this.info = {
        }
    }

    get render() {
        return (
            <div className="bg_img">
                <div className="special_frame">
                    <label className="b title_add_landlord w20_1ch">{CommonStr.add_area}</label>
                    <div className="info_landlord">
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.area_name}</label>
                            <input className="info_landlord_content in_top" name="community_name"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.area_address}</label>
                            <input className="info_landlord_content in_top" name="community_location"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.area_around}</label>
                            <input className="info_landlord_content in_top" name="community_facilities"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.area_trafic}</label>
                            <input className="info_landlord_content in_top" name="community_transport"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top community_tips">{CommonStr.area_label}</label>
                        </div>
                    </div>
                    <button className="finish w15_2ch">{CommonStr.ok}</button>
                </div>
            </div>
        );
    }
}