import React, { Component } from 'react';
import { TabContent, TabPane, Button, Nav, NavItem, NavLink, Label } from 'reactstrap';
import { Card, CardTitle, CardText, CardFooter, CardBody, CardGroup, CardSubtitle } from 'reactstrap';
import { Pagination, PaginationLink, PaginationItem } from 'reactstrap';
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

    renderPagination(current, total) {
        const items = [];

        items.push((current === 1)
            ? <PaginationItem key="Pagination_0" disable><PaginationLink previous href="#" /></PaginationItem>
            : <PaginationItem key="Pagination_0"><PaginationLink previous href="#" /></PaginationItem>
        );

        for (let idx = 1; idx <= total; idx++) {
            items.push((current === idx)
                ? <PaginationItem key={`Pagination_${idx}`} active><PaginationLink href="#">{idx}</PaginationLink></PaginationItem>
                : <PaginationItem key={`Pagination_${idx}`}><PaginationLink href="#">{idx}</PaginationLink></PaginationItem>
            );
        }

        items.push((current === total)
            ? <PaginationItem key={`Pagination_${total + 1}`} disable><PaginationLink next href="#" /></PaginationItem>
            : <PaginationItem key={`Pagination_${total + 1}`}><PaginationLink next href="#" /></PaginationItem>
        );
        return (<Pagination>{items}</Pagination>);
    }

    get renderRoomContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[0].length; idx++) {
            const item = this.state.content[0][idx];
            tempItems.push(
                <Card body key={`Card_${listItems.length}_${tempItems.length}`}>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>
                            小区: {item.area_address}<br />
                            位置: {item.building}幢{item.house_number}单元<br />
                            房东: {item.landlord_name}<br />
                            电话: {item.landlord_phone}<br />
                            对接人: {item.staff_name}<br />
                            状态: {item.room_state}<br />
                            整租: {item.whole_rent}<br />
                            装修: {item.level}<br />
                            面积: {item.size}<br />
                            信息: {item.rooms}室{item.sittings}厅{item.kitchen}厨{item.toilet}卫
                        </CardText>
                        <Button>编辑</Button>
                        <CardFooter>{getReadableTime(item.create_time)}</CardFooter>
                    </CardBody>
                </Card>
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            } else {
                tempItems.push(<a> </a>);
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="0" key="TabPane_0">
                {this.renderPagination(2, 9)}
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get renderAreaContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[1].length; idx++) {
            const item = this.state.content[1][idx];
            tempItems.push(
                <Card key={`Card_${listItems.length}_${tempItems.length}`}>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>地址: {item.address}</CardSubtitle>
                        <Button>编辑</Button>
                    </CardBody>
                </Card>
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            } else {
                tempItems.push(<a> </a>);
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="1" key="TabPane_1">
                {this.renderPagination(2, 9)}
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get renderLandlordContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[2].length; idx++) {
            const item = this.state.content[2][idx];
            tempItems.push(
                <Card body key={`Card_${listItems.length}_${tempItems.length}`}>
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
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            } else {
                tempItems.push(<a> </a>);
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="2" key="TabPane_2">
                {this.renderPagination(2, 9)}
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get renderTenantContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[3].length; idx++) {
            const item = this.state.content[3][idx];
            tempItems.push(
                <Card body className="Card" key={`Card_${listItems.length}_${tempItems.length}`}>
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
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            } else {
                tempItems.push(<a> </a>);
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="3" key="TabPane_3">
                <CardGroup>{listItems}</CardGroup>
                {this.renderPagination(2, 9)}
            </TabPane>
        );
    }

    get renderStaffContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.state.content[4].length; idx++) {
            const item = this.state.content[4][idx];
            tempItems.push(
                <Card body className="Card" key={`Card_${listItems.length}_${tempItems.length}`}>
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
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            } else {
                tempItems.push(<a> </a>);
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="4" key="TabPane_4">
                <Button className="ToolsBar">添加</Button>
                <Form inline>
                </Form>
                <CardGroup>{listItems}</CardGroup><p />
                {this.renderPagination(2, 9)}
            </TabPane>
        );
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
            this.renderRoomContent,
            this.renderAreaContent,
            this.renderLandlordContent,
            this.renderTenantContent,
            this.renderStaffContent
        ];
        for (let idx = 0; idx < content.length; idx++) {
            panes.push(content[idx]);
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