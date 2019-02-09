import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/AddPageCommon.css';
import '../resources/css/common.css';
import '../resources/css/label.css';
import PersonType, { AddpersonAction, AddPersonTitle } from '../common/PersonType';
import { formData2Json } from '../common/Function';

export default class AddPersonPage {
    constructor(context, person_type) {
        this.context = context;
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.person_type = person_type
        this.info = {
        }
    }

    handleSubmitEvent(event) {
        event.preventDefault();
        const data = formData2Json(new FormData(event.target));
        this.context.requesthdr.send_message(this.action, data, this);
    }

    get title() {
        return AddPersonTitle[this.person_type];
    }

    get action() {
        return AddpersonAction[this.person_type];
    }

    get render() {
        return (
            <div className="add_page_common_background">
                <form className="add_page_common_main_frame" onSubmit={this.handleSubmitEvent}>
                    <label className="b w20_1ch add_page_common_title textalign_c">{this.title}</label>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top" >{CommonStr.name}</label>
                        <input className="add_page_common_value b15_1ch in_top" name="name" required></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_middle">{CommonStr.sex}</label>
                        <input id="gender_male" className="in_middle" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="MALE" required></input>
                        <label className="w16_1ch in_middle" htmlFor="gender_male">{CommonStr.man}</label>
                        <input id="gender_female" className="in_middle" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="FEMALE"></input>
                        <label className="w16_1ch in_middle" htmlFor="gender_female">{CommonStr.woman}</label>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.age}</label>
                        <input className="add_page_common_value b15_1ch in_top" name="age"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.phone}</label>
                        <input className="add_page_common_value b15_1ch in_top" name="phone"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.native_place}</label>
                        <input className="add_page_common_value b15_1ch in_top" name="native_place"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.id_card}</label>
                        <input className="add_page_common_value b15_1ch in_top" name="id_card"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.remarks}</label>
                        <input className="add_page_common_value b15_1ch in_top" name="remarks"></input>
                    </div>
                    <button className="b add_page_common_ok w15_2ch">{CommonStr.ok}</button>
                </form>
            </div >
        );
    }

    on_loadend(data) {
        switch (this.person_type) {
            case PersonType.STAFF:
                this.context.pages[5][0].info.data = [];
                this.context.setState({ current_page: 5 });
                break;
            case PersonType.CUSTOMER:
                this.context.pages[4][0].info.data = [];
                this.context.setState({ current_page: 4 });
                break;
            case PersonType.LANDLORD:
                this.context.pages[3][0].info.data = [];
                this.context.setState({ current_page: 3 });
                break;
            default:
                break;
        }
    }

    on_error(code, data) {
        console.log(code, data);
    }
}