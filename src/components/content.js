import React, { Component } from 'react'
import "../styles/content.css"

export default class content extends Component {
    render() {
        return (
            <div>
                <div className="headBox">
                    <strong>良辰吉市</strong> | 
                    <strong>婚礼纪自营品牌</strong>
                </div>
                <ul className="ulBox">
                {
                    this.props.ziarr.map((v,i)=>{
                        return (
                            <li key={i}>
                                <a href="#">
                                    <img src={v.imgurl}/>
                                    <p>{v.title}</p>
                                    <span>￥{v.num}</span>
                                </a>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
