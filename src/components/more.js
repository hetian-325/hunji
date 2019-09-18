import React, { Component } from 'react'
import {store} from '../redux/store'
import "../styles/more.css"

export default class more extends Component {
    render() {
        return (
            <ul className="bigBox">
                {
                    store.getState().map((v,i)=>{
                        return (
                            <li key={i} className="aBox">
                                <a href="#">
                                    <img src={v.imgurl}/>
                                    <span>{v.title}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
