import React, { Component } from 'react';
import './Users.css';

class Users extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }

    get renderLogo() {
        return (
            <div className="company">
                <label className="english_name">MEI TENG</label>
                <label className="chinese_name">美腾房产</label>
            </div>
        );
    }

    get renderToolBar() {
        return (
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
        );
    }

    get renderSearchPage() {
        return (
            <div className="logo_frame">
                <div className="form_frame">
                    <input className="search_content" type="text" placeholder=" 请输入关键词"></input>
                    <button className="btn_search"></button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="home_page">
                {this.renderLogo}
                {this.renderToolBar}
                <div className="background_pic"></div>
                {this.renderSearchPage}
            </div>

        );
    }
}

export default Users;