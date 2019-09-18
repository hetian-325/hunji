import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/daohang.css"

export default class daohang extends Component {
    state={
        navarr:[
            {linkto:"/a",imga:"img/link01.jpg",imgb:"img/link001.jpg",text:"首页",bool:false},
            {linkto:"/b",imga:"img/link02.jpg",imgb:"img/link002.jpg",text:"新娘说",bool:true},
            {linkto:"/c",imga:"img/link03.jpg",imgb:"img/link003.jpg",text:"婚品11.11",bool:true},
            {linkto:"/d",imga:"img/link04.jpg",imgb:"img/link004.jpg",text:"收藏",bool:true},
            {linkto:"/e",imga:"img/link05.jpg",imgb:"img/link005.jpg",text:"我们",bool:true}
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
