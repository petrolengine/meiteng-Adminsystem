import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/AddPageCommon.css';
import '../resources/css/common.css';
import '../resources/css/label.css';

export default class AddCustomerPage {
    constructor(context, title) {
        this.context = context;
        this.title = title
        this.info = {
        }
    }

    get render() {
        return (
            <div className="add_page_common_background">
                <div className="add_page_common_main_frame">
                    <label className="b w20_1ch add_page_common_title textalign_c">{this.title}</label>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top" >{CommonStr.name}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="name"></input>
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
                        <input className="add_page_common_value w15_1ch in_top" name="age"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.phone}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="phone"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.native_place}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="native_place"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.id_card}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="id_card"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.remarks}</label>
                        <input className="add_page_common_value w15_1ch in_top" name="remarks"></input>
                    </div>
                    <button className="b add_page_common_ok w15_2ch">{CommonStr.ok}</button>
                </div>
            </div>
        );
    }
}