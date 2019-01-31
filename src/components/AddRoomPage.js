import React from 'react';
import '../resources/css/AddPage.css'
import '../resources/css/common.css'
import '../resources/css/add_sales.css'
import '../resources/css/label.css'
import CommonStr from '../resources/strings/common';

export default class AddRoomPage {
    constructor(context, bsale) {
        this.context = context;
        this.bsale = bsale;
        this.info = {
        }
    }

    get render() {
        return (
            <div>
                <div className="decoration"></div>
                <div className="bg_img">
                    <div className="special_frame_xl">
                        <label className="b title_add_landlord w20_1ch">{this.bsale ? CommonStr.add_sale : CommonStr.add_rend}</label>
                        <div className="info_landlord">
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">位置</label>
                                <input className="info_landlord_content in_top" name="sales_house_location" placeholder="例.靠近万达广场"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">{CommonStr.address}</label>
                                <input className="info_landlord_content in_top name=sales_house_address"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">类型</label>
                                <select className="lx b15_1_ch">
                                    <option>住宅</option>
                                    <option>别墅</option>
                                    <option>商铺</option>
                                    <option>商住</option>
                                    <option>写字楼</option>
                                </select>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">户型</label>
                                <input className="shi in_top b12_1_ch" name="bedroom" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">室</label>
                                <input className="ting in_top b12_1_ch" name="livingroom" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">厅</label>
                                <input className="ting in_top b12_1_ch" name="toliet" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">卫</label>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">面积/楼层</label>
                                <input className="mj in_top b12_1_ch" name="room_area" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">平米</label>
                                <input className="lc in_top b12_1_ch" name="floor" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">楼层</label>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">朝向</label>
                                <select className="lx b15_1_ch">
                                    <option>东</option>
                                    <option>南</option>
                                    <option>西</option>
                                    <option>北</option>
                                    <option>东南</option>
                                    <option>西南</option>
                                    <option>东北</option>
                                    <option>西北</option>
                                </select>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">装修</label>
                                <select className="lx b15_1_ch">
                                    <option>普通装修</option>
                                    <option>精装修</option>
                                    <option>豪华装修</option>
                                </select>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">单价/总价</label>
                                <input className="mj in_top b12_1_ch" name="unit_price" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">元/平米</label>
                                <input className="zj in_top b12_1_ch" name="total_price" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">万元</label>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">车位/价格</label>
                                <select className="park b15_1_ch">
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                                <label className="w15_2ch in_top hx">车位&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input className="zj in_top b12_1_ch" name="park_total_price" pattern="[0-9]" title="请输入阿拉伯数字"></input>
                                <label className="w15_2ch in_top hx">万元/个</label>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top" >物业公司</label>
                                <input className="info_landlord_content in_top" name="property_management_company"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top" >信息备注</label>
                                <input className="info_landlord_content in_top" name="sales_remark"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top" >设施配套</label>
                                <label className="facilities w2 distance0_7 c666_15_1_ch in_middle">电梯</label>
                                <label className="facilities w2 distance0_7 c666_15_1_ch in_middle">阳台</label>
                                <label className="facilities w2 distance0_7 c666_15_1_ch in_middle">宽带</label>
                                <label className="facilities w3 distance0_7 c666_15_1_ch in_middle">热水器</label>
                                <div className="b">
                                    <label className="facilities w2 distance88_9 c666_15_1_ch in_middle">空调</label>
                                    <label className="facilities w2 distance9_7 c666_15_1_ch in_middle">暖气</label>
                                    <label className="facilities w2 distance9_7 c666_15_1_ch in_middle">冰箱</label>
                                    <label className="facilities w3 distance9_7 c666_15_1_ch in_middle">洗衣机</label>
                                </div>
                                <div className="b">
                                    <label className="facilities w2 distance88_9 c666_15_1_ch in_middle">电视</label>
                                    <label className="facilities w2 distance9_7 c666_15_1_ch in_middle">衣柜</label>
                                    <label className="facilities w2 distance9_7 c666_15_1_ch in_middle">床</label>
                                    <label className="facilities w3 distance9_7 c666_15_1_ch in_middle">天然气</label>
                                </div>

                            </div>
                        </div>
                        <button className="finish_sales w15_2ch">确定</button>
                    </div>
                </div>
            </div>
        );
    }
}
