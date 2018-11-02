import React, { Component } from 'react';
import { TabContent, TabPane, Col, Row, Card, CardTitle, CardText, CardFooter, Button, Nav, NavItem, NavLink } from 'reactstrap';
import { CardBody, CardGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import classnames from 'classnames';
import './Users.css';
import RequestHandler from '../common/RequestHandler';
import { getReadableTime } from '../common/Function';

class Users extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            error: false,
            currentTab: 4,
            content: [[], [], [], [], []],
            offset: [0, 0, 0, 0, 0],
        };
        this.currentTab = 4;
        this.waitResponse = false
        this.sex = { None: "未知", Man: "男", Woman: "女" };
    }

    __getMessageFromServer() {
        const urls = ["GetRoomList", "GetAreaList", "GetLandlordList", "GetTenantList", "GetStaffList"];
        this.waitResponse = true;
        RequestHandler.instance.send_message(`/users/${urls[this.currentTab]}`, undefined, this);
    }

    componentDidMount() {
        this.handleSelect(4);
    }

    handleSelect(key) {
        if (!this.waitResponse) {
            this.currentTab = key;
            if (this.state.content[key].length > 0) {
                this.setState({ currentTab: key });
            } else {
                this.__getMessageFromServer();
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

    get renderLandlordContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[2].length; idx++) {
            const item = this.state.content[2][idx];
            tempItems.push(
                <Card body className="Card" key={`LandlordCard_${listItems.length}_${tempItems.length}`}>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>
                            电话: {item.phone}<br />
                            性别: {this.sex[item.sex]}
                        </CardText>
                        <Button>编辑</Button>
                        <CardFooter>{getReadableTime(item.create_time)}</CardFooter>
                    </CardBody>
                </Card>
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`LandlordCardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`LandlordCardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (<CardGroup>{listItems}</CardGroup>);
    }

    get renderTenantContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[3].length; idx++) {
            const item = this.state.content[3][idx];
            tempItems.push(
                <Card body className="Card" key={`TenantCard_${listItems.length}_${tempItems.length}`}>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>
                            电话: {item.phone}<br />
                            性别: {this.sex[item.sex]}
                        </CardText>
                        <Button>编辑</Button>
                        <CardFooter>{getReadableTime(item.create_time)}</CardFooter>
                    </CardBody>
                </Card>
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`TenantCardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`TenantCardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (<CardGroup>{listItems}</CardGroup>);
    }

    get renderStaffContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[4].length; idx++) {
            const item = this.state.content[4][idx];
            tempItems.push(
                <Card body className="Card" key={`StaffCard_${listItems.length}_${tempItems.length}`}>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>
                            电话: {item.phone}<br />
                            性别: {this.sex[item.sex]}
                        </CardText>
                        <Button>编辑</Button>
                        <CardFooter>{getReadableTime(item.create_time)}</CardFooter>
                    </CardBody>
                </Card>
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`StaffCardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`StaffCardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (<CardGroup>{listItems}</CardGroup>);
    }

    get initNavTabs() {
        const navs = [];
        const tabsTtile = ["房间", "小区", "房东", "顾客", "员工"];
        for (let idx = 0; idx < tabsTtile.length; idx++) {
            navs.push(
                <NavItem key={`NavItem_${idx}`}>
                    <NavLink
                        className={classnames({ active: this.state.currentTab === idx })}
                        onClick={() => this.handleSelect(idx)}
                    > {tabsTtile[idx]} </NavLink>
                </NavItem>
            );
        }
        return (<Nav tabs>{navs}</Nav>);
    }

    get initTabContent() {
        const panes = [];
        const content = [
            this.renderTab1Content,
            this.renderTab2Content,
            this.renderLandlordContent,
            this.renderTenantContent,
            this.renderStaffContent
        ];
        for (let idx = 0; idx < content.length; idx++) {
            panes.push(<TabPane tabId={`${idx}`} key={`TabPane_${idx}`}>{content[idx]}</TabPane>);
        }
        return (<TabContent activeTab={`${this.state.currentTab}`}>{panes}</TabContent>);
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
                    {this.initTabContent}
                </div >
            );
        }
    }

    on_loadend(data) {
        const temp = this.state.content;
        temp[this.currentTab] = data;
        this.setState({ content: temp, currentTab: this.currentTab });
        this.waitResponse = false;
    }

    on_error(code, data) {
        if (typeof (data) === 'object') {
            this.setState({ error: true, code: code, errormsg: data.message, stack: data.stack });
        }
    }
}

export default Users;