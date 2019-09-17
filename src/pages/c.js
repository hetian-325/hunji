import React, { Component } from 'react'
import Header from '../components/header'
import {store} from '../redux/store'

export default class c extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    {
                        store.getState().map((v,i)=>{
                            return (
                                <a href="#" key={i}>
                                    <img src={v.imgurl}/>
                                    <span>{v.title}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
