import React from 'react';
import CommonStr from '../resources/strings/common';
import '../resources/css/AddPageCommon.css';
import '../resources/css/common.css';

export default class AddAreaPage {
    constructor(context) {
        this.context = context;
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.info = {
        }
    }

    handleSubmitEvent(event) {
    }

    get render() {
        return (
            <div className="add_page_common_background">
                <form className="add_page_common_main_frame"
                    action={`${process.env.REACT_APP_URL_PREFIX}/add_area`}
                    method="POST"
                    onSubmit={this.handleSubmitEvent}
                >
                    <label className="b w20_1ch textalign_c add_page_common_title">{CommonStr.add_area}</label>
                    <div className="b add_page_common_item" style={{ marginTop: "40px" }}>
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.area_name}</label>
                        <input className="add_page_common_value w15_1ch in_top noborder" name="name"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.area_address}</label>
                        <input className="add_page_common_value w15_1ch in_top noborder" name="address"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.area_around}</label>
                        <input className="add_page_common_value w15_1ch in_top noborder" name="around"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.area_trafic}</label>
                        <input className="add_page_common_value w15_1ch in_top noborder" name="trafic"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.area_label}</label>
                    </div>
                    <button className="b add_page_common_ok w15_2ch noborder">{CommonStr.ok}</button>
                </form>
            </div>
        );
    }
}