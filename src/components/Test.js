import React, { Component } from 'react';
import './Test.css';

class Test extends Component {
    render() {
        return (
            <div className="home_page">
               <div className="company">
                  <label className="english_name">MEI TENG</label>
                  <label className="chinese_name">美腾房产</label>
               </div>
               <div className="tool_bar">
                  <div className="L1"></div>
                  <div className="meun">
                     <ul className="meun_bar">
                        <li className="item1">首页</li>
                        <li className="item1">卖房</li>
                        <li className="item1">租房</li>
                        <li className="item1">小区</li>
                        <li className="item1">房东</li>
                        <li className="item1">顾客</li>
                        <li className="item1">员工</li>
                        <li className="addition item1">添加
                            <ul className="drop-down-content">
                                <li className="item2">卖房</li>
                                <li className="item2">租房</li>
                                <li className="item2">小区</li>
                                <li className="item2">房东</li>
                                <li className="item2">顾客</li>
                                <li className="item2">员工</li>
                            </ul>
                        </li>
                     </ul>
                  </div>
                  <div className="L3"></div>
               </div>               
               <div className="background_pic">
               </div>
               <div className="logo_frame">
                    <div className="form_frame">
                        <input type="text" placeholder=" 请输入关键词"></input>
                        <button className="btn_search"></button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Test;