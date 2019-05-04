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

    get renderTypes() {
        const items = [];
        AddRoomStr.types.forEach((o) => items.push(<option key={`add_room_page_types_key_${items.length}`}>{o}</option>));
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.type}</label>
                <select className="lx b15_1_ch">
                    {items}
                </select>
            </div>
        );
    }

    get renderChaoXiang() {
        const items = [];
        AddRoomStr.chaoxiangs.forEach((o) => items.push(<option key={`add_room_page_chao_xiang_key_${items.length}`}>{o}</option>));
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.chaoxiang}</label>
                <select className="lx b15_1_ch">
                    {items}
                </select>
            </div>
        );
    }

    get renderZhuangXiu() {
        const items = [];
        AddRoomStr.zhuangxius.forEach((o) => items.push(<option key={`add_room_page_zhuang_xiu_key_${items.length}`}>{o}</option>));
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.zhuangxiu}</label>
                <select className="lx b15_1_ch">
                    {items}
                </select>
            </div>
        );
    }

    get renderPeiTaoSheShi() {
        const items = [];
        AddRoomStr.peitaosheshis.forEach((o) => {
            const sub = [];
            o.forEach((oo) => sub.push(<label className="facilities w2 distance0_7 c666_15_1_ch in_middle" key={`add_room_page_peitaosheshi_key_${sub.length}`}>{oo}</label>));
            items.push(
                <div className="b" key={`add_room_page_peitaosheshi2_key_${items.length}`}>
                    {sub}
                </div>
            );
        });
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.peitaosheshi}</label>
                {items}
            </div>
        );
    }

    get renderAreaItem() {
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2ch in_top" htmlFor="area">{AddRoomStr.area}</label>
                <input
                    className="add_page_common_value in_top"
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
                <label className="add_page_common_key w15_2ch in_top" htmlFor="landlord">{CommonStr.fangdong}</label>
                <input
                    className="add_page_common_value in_top"
                    name="landlord" id="add_landlord_input"
                    list="add_landlord_input_data_list"
                    onChange={this.quickLandlordSearch}
                    placeholder={AddRoomStr.landlord_placehold}>
                </input>
                <datalist id="add_landlord_input_data_list"></datalist>
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
                    {this.renderTypes}
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.huxing}</label>
                        <input className="shi in_top b12_1_ch" name="bedroom" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.shi}</label>
                        <input className="ting in_top b12_1_ch" name="livingroom" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.ting}</label>
                        <input className="ting in_top b12_1_ch" name="toliet" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.wei}</label>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.mianji_louceng}</label>
                        <input className="mj in_top b12_1_ch" name="room_area" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.pingmi}</label>
                        <input className="lc in_top b12_1_ch" name="floor" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.louceng}</label>
                    </div>
                    {this.renderChaoXiang}
                    {this.renderZhuangXiu}
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.danjia_zongjia}</label>
                        <input className="mj in_top b12_1_ch" name="unit_price" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.yuan_pingmi}</label>
                        <input className="zj in_top b12_1_ch" name="total_price" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.wanyuan}</label>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.chewei_jiage}</label>
                        <select className="park b15_1_ch">
                            <option>{AddRoomStr.you}</option>
                            <option>{AddRoomStr.wu}</option>
                        </select>
                        <label className="w15_2ch in_top hx">{AddRoomStr.chewei}</label>
                        <input className="zj in_top b12_1_ch" name="park_total_price" pattern="[0-9]" title={AddRoomStr.add_number_only}></input>
                        <label className="w15_2ch in_top hx">{AddRoomStr.wanyuan_ge}</label>
                    </div>
                    {renderAddPageCommonItem("property_management_company", AddRoomStr.wuyegongsi, "")}
                    {renderAddPageCommonItem("remark", CommonStr.remarks, "")}
                    {this.renderPeiTaoSheShi}
                    <button className="b add_page_common_ok w15_2ch">{CommonStr.ok}</button>
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
