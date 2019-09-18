import React, { Component } from 'react'
import { Row, Col } from 'antd'
import "../styles/header.css"
import { Input } from 'antd'
const { Search } = Input

export default class header extends Component {
    render() {
        return (
            <div className="topBox">
                <Row>
                    <Col span={1}></Col>
                    <Col span={16}>
                        <Search
                        placeholder="搜索你想要的商品"
                        onSearch={value => console.log(value)}
                        style={{ width: 250 }}
                        />
                    </Col>
                    <Col span={3}><a href="#"><img src="img/head01.jpg" /></a></Col>
                    <Col span={3}><a href="#"><img src="img/head02.jpg" /></a></Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }
}
