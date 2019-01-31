import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/AddPageCommon.css';
import '../resources/css/common.css';

export default class AddStaffPage {
    constructor(context) {
        this.context = context;
        this.info = {
        }
    }

    get render() {
        return (
            <div className="add_page_common_background">
                <div className="add_page_common_main_frame">
                    <label className="b w20_1ch add_page_common_title textalign_c">{CommonStr.add_staff}</label>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top" >{CommonStr.name}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="staff_name"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_middle">{CommonStr.sex}</label>
                        <input id="gender_male" className="in_middle" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="male"></input>
                        <label className="w16_1ch in_middle" htmlFor="gender_male">{CommonStr.man}</label>
                        <input id="gender_female" className="in_middle" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="female"></input>
                        <label className="w16_1ch in_middle" htmlFor="gender_female">{CommonStr.woman}</label>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.age}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="staff_age"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.age}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="staff_tele"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.native_place}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="staff_obode"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.id_card}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="staff_id"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.remarks}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="staff_others" placeholder={CommonStr.others}></input>
                    </div>
                    <button className="b add_page_common_ok w15_2ch">{CommonStr.ok}</button>
                </div>
            </div>
        );
    }
}