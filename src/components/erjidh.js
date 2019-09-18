import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "../styles/erjidh.css"

export default class erjidh extends Component {
    state={
        erarr:[
            {linkto:"/c/era",title:"精选",bool:true},
            {linkto:"/c/erb",title:"婚纱礼服",bool:false},
            {linkto:"/c/erc",title:"婚房布置",bool:false},
            {linkto:"/c/erd",title:"婚鞋箱包",bool:false},
            {linkto:"/c/ere",title:"喜爱",bool:false},
            {linkto:"/c/erf",title:"更多",bool:false}
        ],
        num:0
    }
    bgfun(i){
        var newarr=[...this.state.erarr];
        var nums=this.state.num;
        newarr[i].bool=true;
        newarr[nums].bool=false;
        this.setState({
            erarr:newarr,
            num:i
        })
    }
    render() {
        return (
            <div className="erBox">
                {
                    this.state.erarr.map((v,i)=>{
                        return (
                            <NavLink to={v.linkto} key={i} activeClassName="erNav" onClick={()=>{this.bgfun(i)}}>
                                {v.title}
                                {v.bool?<img src="../img/er-bg.jpg" />:''}
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
}
