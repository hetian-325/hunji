import React, { Component } from 'react'
import Header from '../components/header'
import More from '../components/more'
import Picture from '../components/picture'
import Content from '../components/content'

import { Route,Redirect } from 'react-router-dom'
import ErA from './erji/era'
import ErB from './erji/erb'
import ErC from './erji/erc'
import ErD from './erji/erd'
import ErE from './erji/ere'
import ErF from './erji/erf'
import Erjidh from '../components/erjidh'

export default class c extends Component {
    state={
        obj:[
            { id: 1, title: "中式婚礼创意套装结婚伴手礼...", imgurl: "img/c1.png", num: 9.9 },
            { id: 2, title: "结婚中式陶瓷喜碗喜杯敬茶杯...", imgurl: "img/c2.png", num: 22 },
            { id: 3, title: "中式烫金流苏喜糖盒", imgurl: "img/c3.png", num: 0.48 },
            { id: 4, title: "【50个装】婚礼纪独家定制...", imgurl: "img/c4.png", num: 16 },
            { id: 5, title: "新娘嫁妆套装 8款可选", imgurl: "img/c5.png", num: 39.9 },
            { id: 6, title: "婚礼手持礼炮 3款可选", imgurl: "img/c6.png", num: 6.8 }
        ]
    }
    render() {
        var bigBox={
            marginBottom:"0.48rem"
        }
        var box={
            width:"100%",
            height:"0.72rem",
            textAlign:"center"
        }
        var img={
            width:"3.42rem",
            height:"0.72rem"
        }
        return (
            <div style={bigBox}>
                <Header />
                <More />
                <div style={box}>
                    <img src="img/list01.png" style={img} />
                </div>
                <Picture />
                <Content ziarr={this.state.obj} />
                <div>
                    <Erjidh />
                    <Route path="/c/era" component={ErA} />
                    <Route path="/c/erb" component={ErB} />
                    <Route path="/c/erc" component={ErC} />
                    <Route path="/c/erd" component={ErD} />
                    <Route path="/c/ere" component={ErE} />
                    <Route path="/c/erf" component={ErF} />
                    <Redirect to="/c/era" />
                </div>
            </div>
        )
    }
}
