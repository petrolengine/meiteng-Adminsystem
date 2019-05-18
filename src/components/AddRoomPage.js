import React from 'react';
import '../resources/css/AddPageCommon.css'
import '../resources/css/common.css'
import '../resources/css/AddRoom.css'
import '../resources/css/label.css'
import CommonStr from '../resources/strings/common';
import AddRoomStr, { RoomDirection, RoomDecorate, RoomType } from '../resources/strings/add_room';
import { formData2Json, renderAddPageCommonItem, commonSubInput } from '../common/Function';

export default class AddRoomPage {
    constructor(context, bsale) {
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.quickAreaSearch = this.quickAreaSearch.bind(this);
        this.quickLandlordSearch = this.quickLandlordSearch.bind(this);
        this.context = context;
        this.bsale = bsale;
        this.title = bsale ? CommonStr.add_sale : CommonStr.add_rend;
        this.url = bsale ? "/users/AddSaleRoom" : "/users/AddRentRoom";
        this.info = {
        }
    }

    handleSubmitEvent(event) {
        event.preventDefault();
        const data = formData2Json(new FormData(event.target));
        this.context.requesthdr.send_message(this.url, data, this);
    }

    quickAreaSearch() {
        const val = document.getElementById("add_area_input").value;
        const data = { key: val };
        this.context.requesthdr.send_message("/users/QSearchArea", data, this);
    }

    quickLandlordSearch() {
        const val = document.getElementById("add_landlord_input").value;
        const data = { key: val };
        this.context.requesthdr.send_message("/users/QSearchLandlord", data, this);
    }

    get renderPeiTaoSheShi() {
        const items = [];
        AddRoomStr.peitaosheshis.forEach((o) => {
            const sub = [];
            o.forEach((oo) => sub.push(
                <div
                    className={"in_middle" + (sub.length === o.length - 1 ? "" : " m_r_8")}
                    key={`add_room_page_peitaosheshi_key_${sub.length}`}
                >
                    <input
                        className="add_room_page_peitaosheshi_cb"
                        type="checkbox"
                        name={oo.key}
                        id={`cb_${oo.key}_${items.length}_${sub.length}`}
                    />
                    <label
                        className="add_room_page_peitaosheshi c666_15_1_ch in_middle"
                        htmlFor={`cb_${oo.key}_${items.length}_${sub.length}`}
                    >
                        {oo.value}
                    </label>
                </div>
            ));
            items.push(
                <div className={"b" + (items.length === 0 ? "" : " m_t_5")} key={`add_room_page_peitaosheshi2_key_${items.length}`}>
                    {sub}
                </div>
            );
        });
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2_ch in_top">{AddRoomStr.peitaosheshi}</label>
                <div className="in_top">
                    {items}
                </div>
            </div>
        );
    }

    get renderBaseInfo() {
        const types = [];
        const decorate = [];
        const direction = [];
        const addFunc = (arr, data) => {
            Object.keys(data).forEach(o => arr.push(
                <option key={`add_room_page_${o}_${arr.length}`} value={o}>
                    {data[o]}
                </option>
            ));
        };
        types.push(<option key={`add_room_page_types_first`}>{AddRoomStr.types}</option>);
        addFunc(types, RoomType);
        decorate.push(<option key={`add_room_page_decorate_first`}>{AddRoomStr.decorate}</option>);
        addFunc(decorate, RoomDecorate);
        direction.push(<option key={`add_room_page_decorate_first`}>{AddRoomStr.direction}</option>);
        addFunc(direction, RoomDirection);
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.base_info}</label>
                <select className="in_middle b15_1_ch add_room_base_info" name="type">{types}</select>
                <select className="in_middle b15_1_ch add_room_base_info m_l_6" name="decorate">{decorate}</select>
                <select className="in_middle b15_1_ch add_room_base_info m_l_6" name="direction">{direction}</select>
            </div>
        );
    }

    get renderAreaItem() {
        return (
            <div className="b add_page_common_item" style={{ marginTop: "30px" }} >
                <label className="add_page_common_key w15_2_ch in_middle" htmlFor="area">{AddRoomStr.area}</label>
                <input
                    className="add_page_common_value in_middle noborder b15_1_ch"
                    name="area" id="add_area_input"
                    list="add_area_input_data_list"
                    onChange={this.quickAreaSearch}
                    placeholder={AddRoomStr.area_placehold}
                />
                <datalist id="add_area_input_data_list"></datalist>
            </div>
        );
    }

    get renderLandlordItem() {
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2_ch in_top" htmlFor="landlord">{CommonStr.landlord}</label>
                <input
                    className="add_page_common_value in_top noborder b15_1_ch"
                    name="landlord" id="add_landlord_input"
                    list="add_landlord_input_data_list"
                    onChange={this.quickLandlordSearch}
                    placeholder={AddRoomStr.landlord_placehold}
                />
                <datalist id="add_landlord_input_data_list"></datalist>
            </div >
        );
    }

    get renderHuXing() {
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2_ch in_middle" htmlFor="bedroom">{AddRoomStr.huxing}</label>
                {commonSubInput(AddRoomStr.bedroom, "1", "bedroom", "number")}
                {commonSubInput(AddRoomStr.livingroom, "0", "livingroom", "number")}
                {commonSubInput(AddRoomStr.toliet, "0", "toliet", "number")}
            </div >
        );
    }

    get render() {
        return (
            <div className="add_page_common_background">
                <form className="in_top add_page_common_main_frame ma" onSubmit={this.handleSubmitEvent}>
                    <label className="b add_page_common_title w20_1ch textalign_c">{this.title}</label>
                    {this.renderAreaItem}
                    {this.renderLandlordItem}
                    {this.renderBaseInfo}
                    {this.renderHuXing}
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.mianji_louceng}</label>
                        {commonSubInput(AddRoomStr.pingmi, "", "room_area", "number")}
                        {commonSubInput(AddRoomStr.louceng, "1", "floor", "number")}
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.danjia_zongjia}</label>
                        {commonSubInput(AddRoomStr.yuan_pingmi, "", "unit_price", "number")}
                        {commonSubInput(AddRoomStr.wanyuan, "", "total_price", "number")}
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.chewei_jiage}</label>
                        {commonSubInput(AddRoomStr.chewei, "0", "has_park", "number")}
                        {commonSubInput(AddRoomStr.wanyuan_ge, "", "park_total_price", "number")}
                    </div>
                    {renderAddPageCommonItem("property_management_company", AddRoomStr.wuyegongsi, AddRoomStr.wuyegongsi_ph)}
                    {renderAddPageCommonItem("remark", CommonStr.remarks, CommonStr.remarks_ph)}
                    {this.renderPeiTaoSheShi}
                    <button className="b add_page_common_ok w15_2_ch noborder">{CommonStr.ok}</button>
                </form>
            </div>
        );
    }

    on_loadend(data) {
        switch (data.key) {
            case "/QSearchArea": {
                const root = document.getElementById("add_area_input_data_list");
                root.innerHTML = "";
                if (data.data.length === 1 && data.data[0].data === document.getElementById("add_area_input").value) {
                    return;
                }
                if (data.data.length > 0) {
                    data.data.forEach((o) => {
                        const item = document.createElement("option");
                        item.value = o.data;
                        root.appendChild(item);
                    });
                }
                break;
            }
            case "/QSearchLandlord": {
                const root = document.getElementById("add_landlord_input_data_list");
                root.innerHTML = "";
                if (data.data.length === 1 && data.data[0].data === document.getElementById("add_landlord_input").value) {
                    return;
                }
                if (data.data.length > 0) {
                    data.data.forEach((o) => {
                        const item = document.createElement("option");
                        item.value = o.data;
                        root.appendChild(item);
                    });
                }
                break;
            }
            case "/AddSaleRoom":
                this.context.pages[1][0].info.data = [];
                this.context.setState({ current_page: 1 });
                break;
            case "/AddRentRoom":
                this.context.pages[2][0].info.data = [];
                this.context.setState({ current_page: 2 });
                break;
            default:
                break;
        }
    }

    on_error(code, data) {
        console.log(code, data);
    }
}
