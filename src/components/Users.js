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
            currentTab: '1',
            tab1Content: [],
            tab2Content: [],
            waitResponse: false
        };
    }

    componentDidMount() {
        RequestHandler.instance.send_message('/users/GetRoomInfo', undefined, this);
    }

    handleSelect(key) {
        if (!this.state.waitResponse) {
            if (this.state['tab' + key + "Content"].length > 0) {
                this.setState({ currentTab: key });
            } else {
                this.setState({ currentTab: key, waitResponse: true });
                RequestHandler.instance.send_message('/users/GetRoomInfo', undefined, this);
            }
        }
    }

    renderTab1Content() {
        const listItems = this.state.tab1Content.map((value: number[], index: number) =>
            <Row className="rows" key={value[0] * 10000}>
                {
                    value.map((v: number, idx: number) =>
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
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.currentTab === '1' })}
                                onClick={() => this.handleSelect('1')}
                            >
                                Tab1
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.currentTab === '2' })}
                                onClick={() => this.handleSelect('2')}
                            >
                                More Tabs
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.currentTab}>
                        <TabPane tabId='1'>
                            <h1>test</h1>
                            {this.renderTab1Content()}
                        </TabPane>
                        <TabPane tabId='2'>
                            {this.renderTab2Content()}
                        </TabPane>
                    </TabContent>
                </div>
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
        }
    }

    on_error(code, data) {
        if (typeof (data) === 'object') {
            this.setState({ error: true, code: code, errormsg: data.message, stack: data.stack });
        }
    }
}

export default Users;