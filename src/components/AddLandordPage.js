import React from 'react';
import '../resources/css/Test.css'
import '../resources/css/common.css'

class AddLandordPage {
    constructor(context) {
        this.context = context;
        this.landord_info = {
        }
    }

    get render() {
        return (
            <div>
                <div className="decoration"></div>
                <div className="bg_img">
                    <div className="special_frame">
                        <label className="b title_add_landlord w20_1ch">添加房东</label>
                        <div className="info_landlord">
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top" >姓名</label>
                                <input className="info_landlord_content in_top" name="landlord_name"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">性别</label>
                                <div className="info_landlord_bk in_top">
                                    <input id="gender_male" style={{ "marginLeft": " 15px" }} type="radio" name="landlord_sex" value="male"></input>
                                    <label className="gender" htmlFor="gender_male">男</label>
                                    <input id="gender_female" style={{ "marginLeft": " 15px" }} type="radio" name="landlord_sex" value="female"></input>
                                    <label className="gender" htmlFor="gender_female">女</label></div>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">年龄</label>
                                <input className="info_landlord_content in_top" name="landlord_age"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">电话</label>
                                <input className="info_landlord_content in_top" name="landlord_tele"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">籍贯</label>
                                <input className="info_landlord_content in_top" name="landlord_obode"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">身份证号</label>
                                <input className="info_landlord_content in_top" name="landlord_id"></input>
                            </div>
                            <div className="b bk">
                                <label className="bkf w15_2ch in_top">房东诉求</label>
                                <input className="info_landlord_content in_top" name="landlord_demands"></input>
                            </div>
                        </div>
                        <button className="finish w15_2ch">确定</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddLandordPage;