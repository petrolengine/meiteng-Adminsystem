import React from 'react';
import '../resources/css/AddPageCommon.css'
import '../resources/css/common.css'
import '../resources/css/add_sales.css'
import '../resources/css/label.css'
import CommonStr from '../resources/strings/common';
import AddRoomStr from '../resources/strings/add_room';
import { renderAddPageCommonItem } from '../common/Function';

export default class AddRoomPage {
    constructor(context, bsale) {
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.quickAreaSearch = this.quickAreaSearch.bind(this);
        this.quickLandlordSearch = this.quickLandlordSearch.bind(this);
        this.context = context;
        this.bsale = bsale;
        this.title = bsale ? CommonStr.add_sale : CommonStr.add_rend;
        this.info = {
        }
    }

    handleSubmitEvent(event) {
        event.preventDefault();
        //this.context.requesthdr.send_message("/users/AddRoom", data, this);
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
                <div className={"in_middle" + (sub.length === o.length - 1 ? "" : " m_r_8")} key={`add_room_page_peitaosheshi_key_${sub.length}`}>
                    <input className="add_room_page_peitaosheshi_cb" type="checkbox" id={`cb_${items.length}_${sub.length}`}></input>
                    <label className="add_room_page_peitaosheshi c666_15_1_ch in_middle" htmlFor={`cb_${items.length}_${sub.length}`}>{oo}</label>
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
        const zhuangxius = [];
        const chaoxiangs = [];
        AddRoomStr.types.forEach((o) => types.push(<option key={`add_room_page_types_key_${types.length}`}>{o}</option>));
        AddRoomStr.zhuangxius.forEach((o) => zhuangxius.push(<option key={`add_room_page_zhuang_xiu_key_${zhuangxius.length}`}>{o}</option>));
        AddRoomStr.chaoxiangs.forEach((o) => chaoxiangs.push(<option key={`add_room_page_chao_xiang_key_${chaoxiangs.length}`}>{o}</option>));
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.base_info}</label>
                <select className="in_middle b15_1_ch add_room_base_info" name="type">{types}</select>
                <select className="in_middle b15_1_ch add_room_base_info m_l_6" name="zhuangxiu">{zhuangxius}</select>
                <select className="in_middle b15_1_ch add_room_base_info m_l_6" name="chaoxiang">{chaoxiangs}</select>
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
                    placeholder={AddRoomStr.area_placehold}>
                </input>
                <datalist id="add_area_input_data_list"></datalist>
            </div>
        );
    }

    get renderLandlordItem() {
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2_ch in_top" htmlFor="landlord">{CommonStr.fangdong}</label>
                <input
                    className="add_page_common_value in_top noborder b15_1_ch"
                    name="landlord" id="add_landlord_input"
                    list="add_landlord_input_data_list"
                    onChange={this.quickLandlordSearch}
                    placeholder={AddRoomStr.landlord_placehold}>
                </input>
                <datalist id="add_landlord_input_data_list"></datalist>
            </div >
        );
    }

    get renderHuXing() {
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.huxing}</label>
                <input className="in_middle b12_1_ch add_room_small_value noborder" type="number" name="bedroom" min="0" defaultValue="1"></input>
                <label className="in_middle w15_2_ch add_room_small_key" htmlFor="bedroom">{AddRoomStr.shi}</label>
                <input className="in_middle b12_1_ch add_room_small_value b15_1_ch noborder" type="number" name="livingroom" min="0" defaultValue="0"></input>
                <label className="in_middle w15_2_ch add_room_small_key" htmlFor="livingroom">{AddRoomStr.ting}</label>
                <input className="in_middle b12_1_ch add_room_small_value b15_1_ch noborder" type="number" name="toliet" min="0" defaultValue="0"></input>
                <label className="in_middle w15_2_ch add_room_small_key" htmlFor="toliet">{AddRoomStr.wei}</label>
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
                        <input className="in_middle b12_1_ch add_room_small_value noborder" name="room_area"></input>
                        <label className="in_middle w15_2_ch add_room_small_key" htmlFor="room_area">{AddRoomStr.pingmi}</label>
                        <input className="in_middle b12_1_ch add_room_small_value noborder" name="floor"></input>
                        <label className="in_middle w15_2_ch add_room_small_key" htmlFor="floor">{AddRoomStr.louceng}</label>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.danjia_zongjia}</label>
                        <input className="in_middle b12_1_ch add_room_small_value noborder" name="unit_price"></input>
                        <label className="in_middle w15_2_ch add_room_small_key" htmlFor="unit_price">{AddRoomStr.yuan_pingmi}</label>
                        <input className="in_middle b12_1_ch add_room_small_value noborder" name="total_price"></input>
                        <label className="in_middle w15_2_ch add_room_small_key" htmlFor="total_price">{AddRoomStr.wanyuan}</label>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2_ch in_middle">{AddRoomStr.chewei_jiage}</label>
                        <input className="in_middle b12_1_ch add_room_small_value noborder" type="number" name="has_park" min="0" defaultValue="0"></input>
                        <label className="in_middle w15_2_ch add_room_small_key" htmlFor="has_park">{AddRoomStr.chewei}</label>
                        <input className="in_middle b12_1_ch add_room_small_value noborder" name="park_total_price"></input>
                        <label className="in_middle w15_2_ch add_room_small_key" htmlFor="park_total_price">{AddRoomStr.wanyuan_ge}</label>
                    </div>
                    {renderAddPageCommonItem("property_management_company", AddRoomStr.wuyegongsi, "")}
                    {renderAddPageCommonItem("remark", CommonStr.remarks, "")}
                    {this.renderPeiTaoSheShi}
                    <button className="b add_page_common_ok w15_2_ch">{CommonStr.ok}</button>
                </form>
            </div>
        );
    }

    on_loadend(data) {
        switch (data.key) {
            case "/QSearchArea":
                if (data.data.length > 0) {
                    const root = document.getElementById("add_area_input_data_list");
                    root.innerHTML = "";
                    data.data.forEach((o) => {
                        const item = document.createElement("option");
                        item.value = o.data;
                        root.appendChild(item);
                    });
                }
                break;
            case "/QSearchLandlord":
                if (data.data.length > 0) {
                    const root = document.getElementById("add_landlord_input_data_list");
                    root.innerHTML = "";
                    data.data.forEach((o) => {
                        const item = document.createElement("option");
                        item.value = o.data;
                        root.appendChild(item);
                    });
                }
                break;
            default:
                break;
        }
    }

    on_error(code, data) {
        console.log(code, data);
    }
}
