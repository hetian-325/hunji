import React, { Component } from 'react'
import "../styles/picture.css"

export default class picture extends Component {
    render() {
        return (
            <div>
                <ul className="uls">
                    <li><a href="#"><img src="img/list02.png"/></a></li>
                    <li><a href="#"><img src="img/list03.png"/></a></li>
                    <li><a href="#"><img src="img/list04.png"/></a></li>
                    <li><a href="#"><img src="img/list05.png"/></a></li>
                </ul>
            </div>
        )
    }
}
