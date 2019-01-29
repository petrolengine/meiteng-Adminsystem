import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/Test.css';
import '../resources/css/common.css';

export default class AddCustomerPage {
    constructor(context) {
        this.context = context;
        this.info = {
        }
    }

    get render() {
        return (
            <div className="bg_img">
                <div className="special_frame">
                    <label className="b title_add_landlord w20_1ch">{CommonStr.add_customer}</label>
                    <div className="info_landlord">
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top" >{CommonStr.name}</label>
                            <input className="info_landlord_content in_top" name="name"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.sex}</label>
                            <div className="info_landlord_bk in_top">
                                <input id="gender_male" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="male"></input>
                                <label className="gender" htmlFor="gender_male">{CommonStr.man}</label>
                                <input id="gender_female" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="female"></input>
                                <label className="gender" htmlFor="gender_female">{CommonStr.woman}</label></div>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.age}</label>
                            <input className="info_landlord_content in_top" name="age"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.phone}</label>
                            <input className="info_landlord_content in_top" name="phone"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.native_place}</label>
                            <input className="info_landlord_content in_top" name="native_place"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.id_card}</label>
                            <input className="info_landlord_content in_top" name="id_card"></input>
                        </div>
                        <div className="b bk">
                            <label className="bkf w15_2ch in_top">{CommonStr.remarks}</label>
                            <input className="info_landlord_content in_top" name="remarks"></input>
                        </div>
                    </div>
                    <button className="finish w15_2ch">{CommonStr.ok}</button>
                </div>
            </div>
        );
    }
}