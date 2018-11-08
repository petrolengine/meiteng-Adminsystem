import React, { Component } from 'react';
import { TabContent, TabPane, Button, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Card, CardTitle, CardText, CardFooter, CardBody, CardGroup, Form, FormGroup, Label, Input } from 'reactstrap';
import { Pagination, PaginationLink, PaginationItem, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import classnames from 'classnames';
import RequestHandler from '../common/RequestHandler';
import { getReadableTime } from '../common/Function';

class Users extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.state = {
            error: false,
            currentTab: 9,
            offset: [0, 0, 0, 0, 0],
            dropdownOpen: false,
        };
        this.currentTab = 9;
        this.currentPage = 0;
        this.waitResponse = false
        this.sex = { None: "未知", Man: "男", Woman: "女" };
        this.content = [[], [], [], [], []];
        this.tabContent = this.__initTabContent;

        const tempData = JSON.parse(window.localStorage.getItem("tempLoginData"));
        if (tempData) {
            this.flag = tempData.flag;
            const totals = tempData.totals;
            this.total = [totals.total_room, 0, totals.total_landlord, totals.total_tenant, totals.total_staff];
            RequestHandler.instance.setJWT(tempData.jwt);
            //window.localStorage.removeItem("tempLoginData");
        }
    }

    get __initTabContent() {
        const panes = [];
        const temp = [
            this.renderRoomContent,
            this.renderAreaContent,
            this.renderLandlordContent,
            this.renderTenantContent,
            this.renderStaffContent,
            this.addRoomContent,
            this.addAreaContent,
            this.addLandlordContent,
            this.addTenantContent,
            this.addStaffContent,
        ];
        for (let idx = 0; idx < temp.length; idx++) {
            panes.push(temp[idx]);
        }
        return panes;
    }

    __renderPagination() {
        if (this.state.currentTab < 5) {
            const items = [];

            const current = this.state.offset[this.state.currentTab] + 1;
            const total = Math.ceil(this.total[this.state.currentTab] / 6);

            items.push((current === 1)
                ? <PaginationItem key="Pagination_0" disabled><PaginationLink previous /></PaginationItem>
                : <PaginationItem key="Pagination_0"><PaginationLink previous onClick={() => this.handlePage(current - 1)} /></PaginationItem>
            );

            for (let idx = 1; idx <= total; idx++) {
                items.push((current === idx)
                    ? <PaginationItem key={`Pagination_${idx}`} active><PaginationLink>{idx}</PaginationLink></PaginationItem>
                    : <PaginationItem key={`Pagination_${idx}`}><PaginationLink onClick={() => this.handlePage(idx)}>{idx}</PaginationLink></PaginationItem>
                );
            }

            items.push((current === total)
                ? <PaginationItem key={`Pagination_${total + 1}`} disabled><PaginationLink next /></PaginationItem>
                : <PaginationItem key={`Pagination_${total + 1}`}><PaginationLink next onClick={() => this.handlePage(current + 1)} /></PaginationItem>
            );
            return (<Pagination className="d-flex justify-content-center">{items}</Pagination>);
        }
    }

    __send_message(url, data) {
        RequestHandler.instance.send_message(url, data, this);
    }

    __getMessageFromServer() {
        const urls = ["GetRoomList", "GetAreaList", "GetLandlordList", "GetTenantList", "GetStaffList"];
        this.waitResponse = true;
        this.__send_message(`/users/${urls[this.currentTab]}`, `{"offset":${this.currentPage * 6}}`);
    }

    componentDidMount() {
        this.handleSelect(9);
    }

    handleSelect(key) {
        if (!this.waitResponse) {
            this.currentTab = key;
            if (key < 5) {
                if (this.content[key].length > 0) {
                    this.setState({ currentTab: key });
                } else {
                    this.__getMessageFromServer();
                }
            } else {
                this.setState({ currentTab: key });
            }
        }
    }

    handlePage(key) {
        if (!this.waitResponse) {
            this.currentPage = key - 1;
            this.__getMessageFromServer();
        }
    }

    get addRoomContent() {
        return (
            <TabPane tabId="5" key="TabPane_5" style={{ width: 500, margin: "auto", marginTop: 25 }}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email5</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password5</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </TabPane>
        );
    }

    get addAreaContent() {
        return (
            <TabPane tabId="6" key="TabPane_6" style={{ width: 500, margin: "auto", marginTop: 25 }}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email6</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password6</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </TabPane>
        );
    }

    get addLandlordContent() {
        return (
            <TabPane tabId="7" key="TabPane_7" style={{ width: 500, margin: "auto", marginTop: 25 }}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email7</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password7</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </TabPane>
        );
    }

    get addTenantContent() {
        return (
            <TabPane tabId="8" key="TabPane_8" style={{ width: 500, margin: "auto", marginTop: 25 }}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email8</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password8</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </TabPane>
        );
    }

    get addStaffContent() {
        return (
            <TabPane tabId="9" key="TabPane_9" style={{ width: 500, margin: "auto", marginTop: 25 }}>
                <Form id="add_staff_id" action={`${process.env.REACT_APP_URL_PREFIX}/users/AddStaff`} method="POST" onSubmit={this.handleSubmitEvent}>
                    <FormGroup className="form-inline">
                        <Label for="name">姓名</Label>
                        <Input type="text" name="name" id="name" required />
                    </FormGroup>
                    <FormGroup className="form-inline">
                        <Label for="sex">性别</Label>
                        <select className="custom-select" id="sex">
                            <option defaultValue="None">未知</option>
                            <option value="Man">男</option>
                            <option value="Woman">女</option>
                        </select>
                    </FormGroup>
                    <FormGroup className="form-inline">
                        <Label for="pwd">密码</Label>
                        <Input type="password" name="password" id="pwd" required />
                    </FormGroup>
                    <FormGroup className="form-inline">
                        <Label for="phone">手机</Label>
                        <Input type="text" name="phone" id="phone" required />
                    </FormGroup>
                    <FormGroup className="form-inline">
                        <Label for="id_card">身份证</Label>
                        <Input type="text" name="id_card" id="id_card" required />
                    </FormGroup>
                    <Button className="ml-2" style={{ width: 239 }} onClick={
                        () => document.getElementById("add_staff_id").reset()
                    }>清空</Button>
                    <Button className="ml-2" style={{ width: 239 }} type="submit">提交</Button>
                </Form>
            </TabPane>
        );
    }

    get renderRoomContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.content[0].length; idx++) {
            const item = this.content[0][idx];
            tempItems.push(
                <Card className="mr-2 border-dark mb-2" style={{ width: 250, height: 300 }} key={`Card_${listItems.length}_${tempItems.length}`}>
                    <CardTitle className="text-center mt-2">{item.name}</CardTitle>
                    <CardBody>
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
                    </CardBody>
                    <Button>编辑</Button>
                    <CardFooter>{getReadableTime(item.create_time)}</CardFooter>
                </Card>
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="0" key="TabPane_0">
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get renderAreaContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.content[1].length; idx++) {
            const item = this.content[1][idx];
            tempItems.push(
                <Card className="mr-2 border-dark mb-2" style={{ width: 250, height: 300 }} key={`Card_${listItems.length}_${tempItems.length}`}>
                    <CardTitle className="text-center mt-2">{item.name}</CardTitle>
                    <CardBody>
                        <Row>地址: {item.address}</Row>
                    </CardBody>
                    <Button>编辑</Button>
                </Card >
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="1" key="TabPane_1">
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get renderLandlordContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.content[2].length; idx++) {
            const item = this.content[2][idx];
            tempItems.push(
                <Card className="mr-2 border-dark mb-2" style={{ width: 250, height: 300 }} key={`Card_${listItems.length}_${tempItems.length}`}>
                    <CardTitle className="text-center mt-2">{item.name}</CardTitle>
                    <CardBody>
                        <Row>电话: {item.phone}</Row>
                        <Row>性别: {this.sex[item.sex]}</Row>
                    </CardBody>
                    <Button>编辑</Button>
                    <CardFooter><small className="text-muted">{getReadableTime(item.create_time)}</small></CardFooter>
                </Card >
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="2" key="TabPane_2">
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get renderTenantContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.content[3].length; idx++) {
            const item = this.content[3][idx];
            tempItems.push(
                <Card className="mr-2 border-dark mb-2" style={{ width: 250, height: 300 }} key={`Card_${listItems.length}_${tempItems.length}`}>
                    <CardTitle className="text-center mt-2">{item.name}</CardTitle>
                    <CardBody>
                        <Row>电话: {item.phone}</Row>
                        <Row>性别: {this.sex[item.sex]}</Row>
                    </CardBody>
                    <Button>编辑</Button>
                    <CardFooter><small className="text-muted">{getReadableTime(item.create_time)}</small></CardFooter>
                </Card >
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="3" key="TabPane_3">
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get renderStaffContent() {
        const listItems = [];
        let tempItems = [];
        for (let idx = 0; idx < this.content[4].length; idx++) {
            const item = this.content[4][idx];
            tempItems.push(
                <Card className="mr-2 border-dark mb-2" style={{ width: 250, height: 300 }} key={`Card_${listItems.length}_${tempItems.length}`}>
                    <CardTitle className="text-center mt-2">{item.name}</CardTitle>
                    <CardBody>
                        <Row>电话: {item.phone}</Row>
                        <Row>性别: {this.sex[item.sex]}</Row>
                    </CardBody>
                    <Button>编辑</Button>
                    <CardFooter><small className="text-muted">{getReadableTime(item.create_time)}</small></CardFooter>
                </Card >
            );
            if (idx % 6 === 5) {
                listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
                tempItems = [];
            }
        }
        if (tempItems.length > 0) {
            listItems.push(<CardGroup key={`CardGroup_${listItems.length}`}>{tempItems}</CardGroup>);
        }
        return (
            <TabPane tabId="4" key="TabPane_4">
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                    </FormGroup>
                    <Button className="mr-2" style={{ width: 80 }}>Submit</Button>
                </Form>
                <CardGroup>{listItems}</CardGroup>
            </TabPane>
        );
    }

    get initNavTabs() {
        const navs = [];
        const dropdowns = [];
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
            dropdowns.push(
                <DropdownItem key={`Dropdown_${idx}`} onClick={() => this.handleSelect(idx + tabsTtile.length)}>
                    {tabsTtile[idx]}
                </DropdownItem>
            );
        }

        navs.push(
            <Dropdown nav isOpen={this.state.dropdownOpen}
                toggle={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}
                key="NavItem_5"
            >
                <DropdownToggle nav caret>添加</DropdownToggle>
                <DropdownMenu>{dropdowns}</DropdownMenu>
            </Dropdown>
        );
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
                    <TabContent activeTab={`${this.state.currentTab}`}>
                        {this.tabContent}
                        {this.__renderPagination()}
                    </TabContent >
                </div >
            );
        }
    }

    on_loadend(data) {
        switch (this.currentTab) {
            case 0:
                this.content[0] = data;
                this.tabContent[0] = this.renderRoomContent;
                break;
            case 1:
                this.content[1] = data;
                this.tabContent[1] = this.renderAreaContent;
                break;
            case 2:
                this.content[2] = data;
                this.tabContent[2] = this.renderLandlordContent;
                break;
            case 3:
                this.content[3] = data;
                this.tabContent[3] = this.renderTenantContent;
                break;
            case 4:
                this.content[4] = data;
                this.tabContent[4] = this.renderStaffContent;
                break;
            default:
                break;
        }
        const temp = this.state.offset;
        temp[this.currentTab] = this.currentPage;
        this.setState({ currentTab: this.currentTab, offset: temp });
        this.waitResponse = false;
    }

    on_error(code, data) {
        if (typeof (data) === 'object') {
            this.setState({ error: true, code: code, errormsg: data.message, stack: data.stack });
        }
    }

    handleSubmitEvent(event) {
        event.preventDefault();
        RequestHandler.instance.send_message2(event.target.action, new URLSearchParams(new FormData(event.target)), this);
    }
}

export default Users;