import React from 'react';
import '../resources/css/Test.css'
import '../resources/css/common.css'
import '../resources/css/add_sales.css'
import '../resources/css/label.css'
import '../resources/css/browse_landlord.css';

class Test {
    get render() {
        return (
            <dev>
                <div className="b browse_filter">
                    <button className="in_middle filter_male"></button>
                    <button className="in_middle filter_female"></button>
                    <button className="in_middle filter_rent"></button>
                    <button className="in_middle filter_sales"></button>
                    <div className="in_middle vertical_line line1"></div>
                    <div className="in_middle vertical_line line2"></div>
                </div>
                <div className="b landlord_info_card">
                    <div className="landlord_info_name in_middle">
                        <label className="b15_1_ch in_top person_name">崔永元</label>
                        <label className="gray10_1_ch in_top person_age">36岁</label>
                        <div className="landlord_sex"></div>
                    </div>
                    <div className="landlord_info_icon in_top">
                        <div className="tele_img deviation b"></div>
                        <div className="identity_img deviation b"></div>
                        <div className="obode_img deviation b"></div>
                        <div className="house_resourde_img deviation b"></div>
                        <div className="commands_img deviation b"></div>
                    </div>
                    <div className="landlord_mian_info in_top">
                        <label className="landlord_tele gray15_1_ch b">电话：232645846</label>
                        <label className="landlord_tele gray15_1_ch b">ID号：564623021589745632</label>
                        <label className="landlord_tele gray15_1_ch b">籍贯：诸暨浣东街道</label>
                        <label className="landlord_tele gray15_1_ch b">资源：
                            <label className="b15_1_ch in_top">已租&nbsp;&nbsp;&nbsp;已售&nbsp;&nbsp;&nbsp;待租&nbsp;&nbsp;&nbsp;待售</label>
                            <label className="b15_1_ch in_top house_num">2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</label>
                        </label>
                        <label className="landlord_tele gray15_1_ch in_top">诉求：意向再租1间50平米的门店</label>
                    </div>
                    <button className="landlord_edit"></button>
                    <label className="landlord_last_time gray10_1_ch">2019/01/30</label>
                </div >
                <div className="browse_landlord_page b">
                    <button className="arrow_left in_top"></button>
                    <button className="num_1 in_top b15_1_ch">1</button>
                    <button className="num_1 in_top b15_1_ch">2</button>
                    <button className="num_1 in_top b15_1_ch">3</button>
                    <button className="arrow_right in_top"></button>
                </div>
            </dev>
        );
    }
}

export default Test;