import React from 'react';
import '../resources/css/browse_landlord.css';
import '../resources/css/TestBrose3.css';
import '../resources/css/label.css';
import '../resources/css/common.css';

export default class TestBrose3 {
    get render() {
        return (
            <div className="browse_community_card b">
                <div className="community_img in_top"></div>
                <div className="community_img2 in_top"></div>
                <div className="community_info_icon in_top">
                    <div className="community_location"></div>
                    <div className="community_around b"></div>
                    <div className="community_transport b"></div>
                </div>
                <label className="community_name b20_1_ch in_top">上城小区</label>
                <div className="community_info_content in_top">
                    <label className="community_info_location gray15_1_ch b">小区位置：城东暨阳街道东三路上城小区</label>
                    <label className="community_info_location gray15_1_ch b">周边配套：近雄风新天地商圈/银行/医院/学校/菜场</label>
                    <label className="community_info_location gray15_1_ch b">交通出行：步行10分钟雄风新天地/近933路公交车</label>
                </div>
                <div className="community_symbol in_top">
                    <label className="community_symbol_content orange15_0_ch in_top">雄风新天地</label>
                    <label className="community_symbol_content orange15_0_ch in_top">933路</label>
                    <label className="community_symbol_content orange15_0_ch in_top">银行</label>
                    <label className="community_symbol_content orange15_0_ch in_top">医院</label>
                    <label className="community_symbol_content orange15_0_ch in_top">学校</label>
                    <label className="community_symbol_content orange15_0_ch in_top">雄风新天地</label>
                    <label className="community_symbol_content orange15_0_ch in_top">933路</label>
                    <label className="community_symbol_content orange15_0_ch in_top">银行</label>
                    <label className="community_symbol_content orange15_0_ch in_top">医院</label>
                    <label className="community_symbol_content orange15_0_ch in_top">学校</label>
                    <label className="community_symbol_content orange15_0_ch in_top">雄风新天地</label>
                    <label className="community_symbol_content orange15_0_ch in_top">933路</label>
                    <label className="community_symbol_content orange15_0_ch in_top">银行</label>
                    <label className="community_symbol_content orange15_0_ch in_top">医院</label>
                    <label className="community_symbol_content orange15_0_ch in_top">学校</label>
                </div>
                <button className="browse_community_edit in_top"></button>
                <label className="browse_community_date b gray10_0_ch">2019/02/01</label>
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