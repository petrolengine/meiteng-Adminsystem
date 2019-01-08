import React, { Component } from 'react';
import './Test2.css';

class Test2 extends Component {

    onClickAll() {
        let test = document.getElementById("testid2");
        if (test.style.display === "none")
            test.style.display = "block";
        else
            test.style.display = "none";
    }

    changeColor(obj) {
        let target = obj.target;
        if (target.style.color !== "rgb(236, 125, 65)") {
            target.style.color = "rgb(236, 125, 65)";
            target.style.textDecoration = "underline";
        } else {
            target.style.color = "black";
            target.style.textDecoration = "none";
        }
    }
    other(obj) {
        let test = document.getElementById("testid2");
        if (test.style.display === "none")
            test.style.display = "block";
        else
            test.style.display = "none";
    }

    option(obj) {
        this.changeColor(obj);
        this.other(obj);
    }

    renderLogo() {
        return (
            <div className="company">
                <label className="english_name">MEI TENG</label>
                <label className="chinese_name">美腾房产</label>
            </div>
        );
    }

    getContent() {
        return (
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
        );
    }

    renderToolBar() {
        return (
            <div className="tool_bar">
                <div className="L1"></div>
                {this.getContent()}
            </div>
        );
    }

    renderSearch() {
        return (
            <div className="search">
                <div className="search_logo"></div>
                <div className="search_frame">
                    <button className="btn" type="summit"></button>
                    <input className="input_frame" type="text" placeholder=" 请输入关键词"></input>
                </div>
            </div>
        );
    }

    addSchool(name) {
        return (
            <li className="dd">{name}</li>
        );
    }


    test() {
        let arr2 = ["全部", "浣江小学", "行知小学", "黄沙小学", "暨阳小学", "滨江小学", "江东小学", "新世纪小学"];
        let result = [];

        for (let i = 0; i < arr2.length; i++) {
            result.push(this.addSchool(arr2[i]));
        }
        return result;
    }

    render() {
        return (
            <div className="home_page">
                {this.renderLogo()}
                {this.renderToolBar()}
                {this.renderSearch()}
                {this.renderresult()}
                )
                }


                <div className="condition_page">
                    <div className="condition_text">
                        <ul className="a">
                            <li className="bb">性质:</li>
                            <li className="aa" onClick={(obj) => {
                                console.log("aa");
                            }}>全部</li>
                            <li className="aa" onClick={(obj) => {
                                this.option(obj);
                            }} > 新房</li>
                            <li className="aa" id="ershoufang" onClick={obj => this.option(obj)}>二手房</li>
                        </ul>
                        <ul className="b">
                            <li className="bb">状态:</li>
                            <li className="aa" onClick={obj => this.option(obj)}>全部</li>
                            <li className="aa" onClick={obj => this.option(obj)}>待售</li>
                            <li className="aa" onClick={obj => this.option(obj)}>已售</li>
                        </ul>
                        <ul className="c">
                            <li className="bb">位置:</li>
                            <li className="aa">全部</li>
                            <li className="aa" id="testid" onClick={this.onClickAll}>学校</li>
                            <li className="aa">商圈</li>
                            <li className="aa">医院</li>
                            <li className="aa">办公</li>
                            <li className="aa">企业</li>
                            <li className="aa">滨江</li>
                        </ul>
                        <div class="child_collection" id="testid2">
                            <ul className="inner_frame">
                                {this.test()}
                            </ul>
                        </div>
                        <ul className="e">
                            <li className="bb">单价:</li>
                            <li className="aa" onClick={obj => this.option(obj)}>全部</li>
                            <li className="aa" onClick={obj => this.option(obj)}>6千元以下</li>
                            <li className="aa" onClick={obj => this.option(obj)}>6千元-1万元</li>
                            <li className="aa" onClick={obj => this.option(obj)}>1万-1.5万</li>
                            <li className="aa" onClick={obj => this.option(obj)}>1.万-2万</li>
                            <li className="aa" onClick={obj => this.option(obj)}>2万元以上</li>
                        </ul>
                        <ul className="f">
                            <li className="bb">户型:</li>
                            <li className="aa">全部</li>
                            <li className="aa">一室</li>
                            <li className="aa">二室</li>
                            <li className="aa">三室</li>
                            <li className="aa">四室</li>
                            <li className="aa">五室及以上</li>
                        </ul>
                        <ul className="g">
                            <li className="bb">类型:</li>
                            <li className="aa">全部</li>
                            <li className="aa">住宅</li>
                            <li className="aa">别墅</li>
                            <li className="aa">商铺</li>
                            <li className="aa">商住</li>
                            <li className="aa">写字楼</li>
                        </ul>
                    </div>
                    <div className="L4"></div>
                    <ul className="filter">
                        <li className="ll">筛选:</li>
                        <select className="area">
                            <option>面积</option>
                            <option>全部</option>
                            <option>50平米以下</option>
                            <option>50-70平米</option>
                            <option>70-90平米</option>
                            <option>90-110平米</option>
                            <option>110-130平米</option>
                            <option>130-150平米</option>
                            <option>150-200平米</option>
                            <option>200-300平米</option>
                            <option>300平米以上</option>
                        </select>
                        <select className="floor">
                            <option>楼层</option>
                            <option>全部</option>
                            <option>6层以下</option>
                            <option>6-12层</option>
                            <option>12层以上</option>
                        </select>
                        <select className="direction">
                            <option>朝向</option>
                            <option>全部</option>
                            <option>东</option>
                            <option>南</option>
                            <option>西</option>
                            <option>北</option>
                            <option>东南</option>
                            <option>东北</option>
                            <option>西南</option>
                            <option>西北</option>
                        </select>
                        <select className="decoration">
                            <option>装修</option>
                            <option>全部</option>
                            <option>毛坯</option>
                            <option>普通装修</option>
                            <option>豪华装修</option>
                            <option>精装修</option>
                        </select>
                        <select className="others">
                            <option>其它</option>
                            <option>全部</option>
                            <option>毛坯</option>
                            <option>普通装修</option>
                            <option>豪华装修</option>
                            <option>精装修</option>
                        </select>
                    </ul>
                    <div className="L5"></div>
                    <ul className="result">
                        <li className="tj">条件:</li>
                        <div className="tj_content" id="er">
                            <label className="second_hand_housing">二手房</label>
                            <button className="no"></button>
                        </div>
                    </ul>
                </div>
                <div className="biaoti">
                    <label className="ti">默认排序</label>
                    <label className="ti">价格</label>
                    <label className="ti">时间</label>
                </div>
                <div className="L6"></div>
                <div className="xiaozi">
                    <label className="huise">共有<label className="juse">86</label>个符合要求</label>
                </div>
                <div className="first_result">
                    <div className="info_pic"></div>
                    <div className="info_text">
                        <p className="p0">上城小区&nbsp;&nbsp;4室2厅2卫&nbsp;&nbsp;200平米</p>
                        <div className="p1">
                            <div className="icon1"></div>
                            <p className="p1_text">上城小区&nbsp;&nbsp;4室2厅2卫&nbsp;&nbsp;200平米&nbsp;&nbsp;15楼&nbsp;&nbsp;南&nbsp;&nbsp;精装修</p>
                        </div>
                        <div className="p2">
                            <div className="icon2"></div>
                            <p className="p2_text"><p className="deepblue">近雄风新天地商圈 </p>- 城东暨阳街道东三路上城小区</p>
                        </div>
                        <div className="p3">
                            <div className="icon3"></div>
                            <p className="p3_text">房东：蜘蛛侠先生 - <p className="deepblue">12345678912</p></p>
                        </div>
                        <div className="p4">
                            <div className="icon4"></div>
                            <p className="p4_text">顾客：花木兰小姐 - <p className="deepblue">21987456321</p></p>
                        </div>
                    </div>
                    <div className="info_price">
                        <button className="edition"></button>
                        <b className="price">200万</b>
                        <p className="unit_price">单价 10000元/平米</p>
                    </div>
                    <div className="L7"></div>
                    <div className="info_status">
                        <button className="edition"></button>
                        <div className="sale_status">
                            <div className="sold"></div>
                            <p className="ycs">已出售<p className="days">30</p>天</p>
                        </div>
                        <div className="saler">
                            <div className="saler_icon"></div>
                            <p className="saler_text">销售人员：&nbsp;&nbsp;周杰伦</p>
                        </div>
                        <div className="saletime">
                            <div className="saletime_icon"></div>
                            <p className="saletime_text">出售时间：&nbsp;&nbsp;2018年12月5日</p>
                        </div>
                    </div>
                </div>
                <div className="L8"></div>
            </div>

        );
    }
}

export default Test2;