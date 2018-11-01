import React, { Component } from 'react';
import { TabContent, TabPane, Col, Row, Card, CardTitle, CardText, CardFooter, Button, Nav, NavItem, NavLink } from 'reactstrap';
import { CardBody, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import classnames from 'classnames';
import './Users.css';
import RequestHandler from '../common/RequestHandler';

class Users extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            error: false,
            currentTab: 4,
            content: [[], [], [], [], []],
            offset: [0, 0, 0, 0, 0],
            waitResponse: false
        };
        this.urls = ["GetRoomList", "GetAreaList", "GetLandlordList", "GetTenantList", "GetStaffList"];
        this.sex = {None: "未知", Man: "男", Woman: "女"};
    }

    __getMessageFromServer(key) {
        this.setState({ currentTab: key, waitResponse: true });
        RequestHandler.instance.send_message(`/users/${this.urls[this.state.currentTab]}`, undefined, this);
    }

    componentDidMount() {
        this.__getMessageFromServer(this.state.currentTab);
    }

    handleSelect(key) {
        if (!this.state.waitResponse) {
            if (this.state.content[key].length > 0) {
                this.setState({ currentTab: key });
            } else {
                this.__getMessageFromServer(key);
            }
        }
    }

    get renderTab1Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 1 Contents</h4>
                </Col>
            </Row>
        );
    }

    get renderTab2Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 2 Contents</h4>
                </Col>
            </Row>
        );
    }

    get renderTab3Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 3 Contents</h4>
                </Col>
            </Row>
        );
    }

    get renderTab4Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 4 Contents</h4>
                </Col>
            </Row>
        );
    }

    __getReadableTime(src) {
        const date = new Date(src);
        return date.toLocaleDateString("zh");
    }

    get renderStaffContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[4].length; idx++) {
            const item = this.state.content[4][idx];
            tempItems.push(
                <Col key={`tab1_card_${idx}`}>
                    <Card body className="StaffCard">
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>
                                电话: {item.phone}<br/>
                                性别: {this.sex[item.sex]}
                            </CardText>
                            <Button>编辑</Button>
                            <CardFooter>{this.__getReadableTime(item.create_time)}</CardFooter>
                        </CardBody>
                    </Card>
                </Col>
            );
            if (idx % 5 === 4) {
                listItems.push(
                    <Row className="rows" key={`rab1_row_${listItems.length}`}>
                        {tempItems}
                    </Row>
                );
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(
                <Row className="rows" key={`rab1_row_${listItems.length}`}>
                    {tempItems}
                </Row>
            );
        }
        return listItems;
    }

    get initNavTabs() {
        const navs = [];
        const tabsTtile = ["房间", "小区", "房东", "顾客", "员工"];
        for (let idx = 0; idx < tabsTtile.length; idx++) {
            const item = tabsTtile[idx];
            navs.push(
                <NavItem key={`NavItem_${idx}`}>
                    <NavLink
                        className={classnames({ active: this.state.currentTab === idx })}
                        onClick={() => this.handleSelect(idx)}
                    > {item} </NavLink>
                </NavItem>
            );
        }
        return (<Nav tabs>{navs}</Nav>);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>{this.state.errormsg}</h1>
                    <h2>{this.state.code}</h2>
                    <pre>{this.state.stack}</pre>
                </div>
            );
        } else {
            return (
                <div>
                    {this.initNavTabs}
                    < TabContent activeTab={`${this.state.currentTab}`} >
                        <TabPane tabId='0'>{this.renderTab1Content}</TabPane>
                        <TabPane tabId='1'>{this.renderTab2Content}</TabPane>
                        <TabPane tabId='2'>{this.renderTab3Content}</TabPane>
                        <TabPane tabId='3'>{this.renderTab4Content}</TabPane>
                        <TabPane tabId='4'>{this.renderStaffContent}</TabPane>
                    </TabContent >
                </div >
            );
        }
    }

    on_loadend(data) {
        const temp = this.state.content;
        temp[this.state.currentTab] = data;
        this.setState({content: temp, waitResponse: false});
    }

    on_error(code, data) {
        if (typeof (data) === 'object') {
            this.setState({ error: true, code: code, errormsg: data.message, stack: data.stack });
        }
    }
}

export default Users;