import React, { Component } from 'react';
import { TabContent, TabPane, Col, Row, Card, CardTitle, CardText, Button, Nav, NavItem, NavLink } from 'reactstrap';
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
            currentTab: 5,
            content: [[], [], [], [], []],
            offset: [0, 0, 0, 0, 0],
            waitResponse: false
        };
        this.tabsTtile = ["房间", "小区", "房东", "顾客", "员工"];
        this.urls = ["GetRoomInfo", "", "", "", "GetStaffList"];
        this.initNavTabs();
    }

    componentDidMount() {
        RequestHandler.instance.send_message('/users/GetStaffList', undefined, this);
    }

    handleSelect(key) {
        if (!this.state.waitResponse) {
            if (this.state.content[key].length > 0) {
                this.setState({ currentTab: key });
            } else {
                this.setState({ currentTab: key, waitResponse: true });
                RequestHandler.instance.send_message('/users/GetRoomInfo', undefined, this);
            }
        }
    }

    renderTab1Content() {
        const listItems = this.state.content[0].map((value, index) =>
            <Row className="rows" key={value[0] * 10000}>
                {
                    value.map((v, idx) =>
                        <Col key={v}>
                            <Card body>
                                <CardTitle>{v}</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        );
        return listItems;
    }

    renderTab2Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 1 Contents</h4>
                </Col>
            </Row>
        );
    }

    renderTab3Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 1 Contents</h4>
                </Col>
            </Row>
        );
    }

    renderTab4Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 1 Contents</h4>
                </Col>
            </Row>
        );
    }

    renderTab5Content() {
        return (
            <Row>
                <Col sm='12'>
                    <h4>Tab 1 Contents</h4>
                </Col>
            </Row>
        );
    }

    initNavTabs() {
        const navs = this.tabsTtile.map((value, index) => {
            <NavItem>
                <NavLink
                    className={classnames({ active: this.state.currentTab === index })}
                    onClick={() => this.handleSelect(index)}
                > value </NavLink>
            </NavItem>
        });
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
                    < TabContent activeTab={this.state.currentTab} >
                        <TabPane tabId='1'>{this.renderTab1Content()}</TabPane>
                        <TabPane tabId='2'>{this.renderTab2Content()}</TabPane>
                        <TabPane tabId='3'>{this.renderTab3Content()}</TabPane>
                        <TabPane tabId='4'>{this.renderTab4Content()}</TabPane>
                        <TabPane tabId='5'>{this.renderTab5Content()}</TabPane>
                    </TabContent >
                </div >
            );
        }
    }

    on_loadend(data) {
        switch (this.state.currentTab) {
            case '1':
                this.setState({ tab1Content: data, waitResponse: false });
                break;
            case '2':
                this.setState({ tab2Content: data, waitResponse: false });
                break;
            default:
                alert("state error");
                break;
        }
    }

    on_error(code, data) {
        if (typeof (data) === 'object') {
            this.setState({ error: true, code: code, errormsg: data.message, stack: data.stack });
        }
    }
}

export default Users;