import React from 'react';
import '../resources/css/Test.css'
import '../resources/css/common.css'
import '../resources/css/Test5.css'

class Test5 {
    get render() {
        return (
            <div>
                <div className="decoration"></div>
                <div className="bg_img">
                    <div className="special_frame">
                        <label className="b title_add_landlord w20_1ch">添加小区</label>
                        <div className="info_landlord">
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top" >小区名字</label>
                                <input className="info_landlord_content in_top" name="community_name"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">小区位置</label>
                                <input className="info_landlord_content in_top" name="community_location"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">周边配套</label>
                                <input className="info_landlord_content in_top" name="community_facilities"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">交通出行</label>
                                <input className="info_landlord_content in_top" name="community_transport"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top community_tips">标签生成</label>
                                <label className="in_middle w15_2ch obk">万达广场</label>
                                <label className="in_middle w15_2ch obk">933路公交</label>
                            </div>
                        </div>
                        <button className="finish w15_2ch">确定</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test5;
