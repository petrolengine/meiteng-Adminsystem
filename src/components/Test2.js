import React from 'react';
import '../resources/css/Test.css'
import '../resources/css/common.css'

class Test2 {
    get render() {
        return (
            <div>
                <div className="decoration"></div>
                <div className="bg_img">
                    <div className="specil_frame">
                        <label className="b title_add_landlord w20_1ch">添加顾客</label>
                        <div className="info_landlord">
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top" >姓名</label>
                                <input className="info_landlord_content in_top"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">性别</label>
                                <div className="info_landlord_bk in_top">
                                    <input id="gender_male" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="male"></input>
                                    <label className="gender" for="gender_male">男</label>
                                    <input id="gender_female" style={{ "marginLeft": " 15px" }} type="radio" name="sex" value="female"></input>
                                    <label className="gender" for="gender_female">女</label></div>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">年龄</label>
                                <input className="info_landlord_content in_top"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">电话</label>
                                <input className="info_landlord_content in_top"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">籍贯</label>
                                <input className="info_landlord_content in_top"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">身份证号</label>
                                <input className="info_landlord_content in_top"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">房东诉求</label>
                                <input className="info_landlord_content in_top"></input>
                            </div>
                        </div>
                        <button className="finish w15_2ch">确定</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test2;
