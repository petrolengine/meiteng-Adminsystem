import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/AddPageCommon.css';
import '../resources/css/common.css';
import '../resources/css/label.css';
import PersonType, { AddpersonAction, AddPersonTitle } from '../common/PersonType';
import { formData2Json, renderAddPageCommonItem } from '../common/Function';

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
            <div className="b add_page_common_background">
                <form className="in_top add_page_common_main_frame" onSubmit={this.handleSubmitEvent}>
                    <label className="b w20_1ch add_page_common_title textalign_c">{this.title}</label>
                    <div className="b add_page_common_item" style={{ marginTop: "30px" }}>
                        <label className="add_page_common_key w15_2_ch in_top">{CommonStr.name}</label>
                        <input
                            className="add_page_common_value b15_1ch in_top noborder"
                            placeholder={CommonStr.name_ph}
                            name="name" required
                        ></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2_ch in_middle">{CommonStr.sex}</label>
                        <input id="gender_male" className="in_middle" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="MALE" required></input>
                        <label className="w16_1ch in_middle" htmlFor="gender_male">{CommonStr.man}</label>
                        <input id="gender_female" className="in_middle" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="FEMALE"></input>
                        <label className="w16_1ch in_middle" htmlFor="gender_female">{CommonStr.woman}</label>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2_ch in_top">{CommonStr.age}</label>
                        <input className="add_page_common_value b15_1ch in_top noborder" type="number" min="0" max="100" name="age"></input>
                    </div>
                    {renderAddPageCommonItem("phone", CommonStr.phone, CommonStr.phone_ph)}
                    {renderAddPageCommonItem("native_place", CommonStr.native_place, CommonStr.native_place_ph)}
                    {renderAddPageCommonItem("id_card", CommonStr.id_card, CommonStr.id_card_ph)}
                    {renderAddPageCommonItem("remarks", CommonStr.remarks, CommonStr.remarks_ph)}
                    <button className="b add_page_common_ok w15_2_ch">{CommonStr.ok}</button>
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