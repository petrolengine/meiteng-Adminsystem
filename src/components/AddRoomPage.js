import React from 'react';
import '../resources/css/AddPageCommon.css'
import '../resources/css/common.css'
import '../resources/css/add_sales.css'
import '../resources/css/label.css'
import CommonStr from '../resources/strings/common';
import AddRoomStr from '../resources/strings/add_room';

export default class AddRoomPage {
    constructor(context, bsale) {
        this.context = context;
        this.bsale = bsale;
        this.info = {
        }
    }

    get renderTypes() {
        const items = [];
        AddRoomStr.types.forEach((o) => items.push(<option>{o}</option>));
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
        AddRoomStr.chaoxiangs.forEach((o) => items.push(<option>{o}</option>));
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
        AddRoomStr.zhuangxius.forEach((o) => items.push(<option>{o}</option>));
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
            o.forEach((oo) => sub.push(<label className="facilities w2 distance0_7 c666_15_1_ch in_middle">{oo}</label>));
            items.push(
                <div className="b">
                    {sub}
                </div>
            );
        });
        return (
            <div className="b add_page_common_item">
                <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.peitaosheshi}</label>

                <label className="facilities w2 distance0_7 c666_15_1_ch in_middle"></label>
                <label className="facilities w2 distance0_7 c666_15_1_ch in_middle"></label>
                <label className="facilities w3 distance0_7 c666_15_1_ch in_middle"></label>
                <div className="b">
                    <label className="facilities w2 distance88_9 c666_15_1_ch in_middle"></label>
                    <label className="facilities w2 distance9_7 c666_15_1_ch in_middle"></label>
                    <label className="facilities w2 distance9_7 c666_15_1_ch in_middle"></label>
                    <label className="facilities w3 distance9_7 c666_15_1_ch in_middle"></label>
                    <div className="b">
                        <label className="facilities w2 distance88_9 c666_15_1_ch in_middle"></label>
                        <label className="facilities w2 distance9_7 c666_15_1_ch in_middle"></label>
                        <label className="facilities w2 distance9_7 c666_15_1_ch in_middle"></label>
                        <label className="facilities w3 distance9_7 c666_15_1_ch in_middle"></label>
                    </div>
                </div>
            </div>
        );
    }

    get render() {
        return (
            <div className="add_page_common_background">
                <div className="special_frame_xl">
                    <label className="b add_page_common_title w20_1ch textalign_c">{this.bsale ? CommonStr.add_sale : CommonStr.add_rend}</label>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{AddRoomStr.place}</label>
                        <input className="add_page_common_value in_top" name="sales_house_location" placeholder={AddRoomStr.place_example}></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.address}</label>
                        <input className="add_page_common_value in_top name=sales_house_address"></input>
                    </div>
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
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top" >{AddRoomStr.wuyegongsi}</label>
                        <input className="add_page_common_value in_top" name="property_management_company"></input>
                    </div>
                    <div className="b add_page_common_item">
                        <label className="add_page_common_key w15_2ch in_top">{CommonStr.remarks}</label>
                        <input className="add_page_common_value in_top" name="sales_remark"></input>
                    </div>
                    {this.renderPeiTaoSheShi}
                    <button className="b add_page_common_ok w15_2ch">{CommonStr.ok}</button>
                </div>
            </div>
        );
    }
}
