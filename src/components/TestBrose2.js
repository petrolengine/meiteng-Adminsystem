import React from 'react';
import '../resources/css/label.css';
import '../resources/css/common.css';
import '../resources/css/TestBrose2.css';
import '../resources/css/browse_landlord.css';

export default class TestBrose2 {
    get render() {
        return (
            <div>
                <div className="staff_info_card b">
                    <div className="staff_portait in_top"></div>
                    <div className="staff_info_icona in_top">
                        <div className="staff_name_icon b"></div>
                        <div className="staff_tele_icon b"></div>
                        <div className="staff_indentity_icon b"></div>
                    </div>
                    <div className="staff_content_a intop">
                        <label className="staff_content_name b gray15_0_ch intop">姓名: 宋慧乔-女-30岁</label>
                        <label className="staff_content_name b gray15_0_ch">手机: 12546567925</label>
                        <label className="staff_content_name b gray15_0_ch">ID号: 549874563256910200</label>
                    </div>
                    <div className="staff_info_iconb in_top">
                        <div className="staff_obode_icon b"></div>
                        <div className="staff_achievement_icon b"></div>
                        <div className="staff_remarks_icon b"></div>
                    </div>
                    <div className="staff_content_b intop">
                        <label className="staff_content_name b gray15_0_ch">籍贯: 诸暨浣东街道</label>
                        <label className="staff_content_name b gray15_0_ch">业绩: 已卖<label className="orange15_1_ch">2</label>&nbsp;&nbsp;已租<label className="orange15_1_ch">2</label>&nbsp;&nbsp;待售<label className="orange15_1_ch">2</label>&nbsp;&nbsp;待租<label className="orange15_1_ch">2</label>
                        </label>
                        <label className="staff_content_name b gray15_0_ch">备注: 持有房产经纪人资格证</label>
                    </div>
                    <button className="staff_edit"></button>
                    <label className="staff_last_time gray10_0_ch">2019/01/30</label>
                </div>
                <div className="browse_landlord_page b">
                    <button className="arrow_left in_top"></button>
                    <button className="num_1 in_top b15_1_ch">1</button>
                    <button className="num_1 in_top b15_1_ch">2</button>
                    <button className="num_1 in_top b15_1_ch">3</button>
                    <button className="arrow_right in_top"></button>
                </div>
            </div>
        );
    }
}