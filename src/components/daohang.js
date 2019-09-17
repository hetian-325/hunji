import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/daohang.css"

import img01 from '../img/link01.jpg'
import img02 from '../img/link02.jpg'
import img03 from '../img/link03.jpg'
import img04 from '../img/link04.jpg'
import img05 from '../img/link05.jpg'
import img001 from '../img/link001.jpg'
import img002 from '../img/link002.jpg'
import img003 from '../img/link003.jpg'
import img004 from '../img/link004.jpg'
import img005 from '../img/link005.jpg'

export default class daohang extends Component {
    state={
        navarr:[
            {linkto:"/a",imga:img01,imgb:img001,text:"首页",bool:false},
            {linkto:"/b",imga:img02,imgb:img002,text:"新娘说",bool:true},
            {linkto:"/c",imga:img03,imgb:img003,text:"婚品11.11",bool:true},
            {linkto:"/d",imga:img04,imgb:img004,text:"收藏",bool:true},
            {linkto:"/e",imga:img05,imgb:img005,text:"我们",bool:true}
        ],
        num:0
    }
    fun(i){
        // var newarr=this.state.navarr.filter((v,j)=>{
        //     if(j==i){
        //         v.bool=false
        //     }else{
        //         v.bool=true
        //     }
        //     return v
        // })
        var newarr = [...this.state.navarr];
        var numa = this.state.num;
        newarr[numa].bool=true;
        newarr[i].bool=false;
        this.setState({
            num:i,
            navarr:newarr
        })
    }
    render() {
        return (
            <div className="box">
                {
                    this.state.navarr.map((v,i)=>{
                        return (
                            <NavLink to={v.linkto} key={i} onClick={()=>{this.fun(i)}} activeClassName="nav">
                                <div>
                                    {v.bool?<img src={v.imga} />:<img src={v.imgb} />}
                                </div>
                                {v.text}
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
}
