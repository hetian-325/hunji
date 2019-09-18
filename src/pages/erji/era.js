import React, { Component } from 'react'
import "../../styles/era.css"

export default class era extends Component {
    state={
        arr:[],
        num:2
    }
    componentDidMount() {
        let newarr=[
            {id:1,imgurl:"../img/b3.png",title:"免邮费试纱【揽月】抹胸欧根纱刺绣齐地拖...",text:"自营",price:"￥399",num1:"￥1699",num2:428},
            {id:2,imgurl:"../img/b4.png"},
            {id:3,imgurl:"../img/b2.png",title:"免邮费试纱【铃兰】抹胸欧根纱刺绣...",text:"自营",price:"￥299",num1:"￥1460",num2:325},
            {id:4,imgurl:"../img/b1.png",title:"免邮费试纱【扶蕊】刺绣齐地拖抹胸欧根纱...",text:"自营",price:"￥199",num1:"￥999",num2:520},
            {id:5,imgurl:"../img/c1.png",title:"免邮费试纱【揽月】抹胸欧根纱刺绣齐地拖...",text:"自营",price:"￥399",num1:"￥1699",num2:428},
            {id:6,imgurl:"../img/c2.png",title:"免邮费试纱【铃兰】抹胸欧根纱刺绣...",text:"自营",price:"￥299",num1:"￥1460",num2:325},
            {id:7,imgurl:"../img/c3.png",title:"免邮费试纱【扶蕊】刺绣齐地拖抹胸欧根纱...",text:"自营",price:"￥199",num1:"￥999",num2:520},
            {id:8,imgurl:"../img/c4.png"},
            {id:9,imgurl:"../img/c5.png",title:"免邮费试纱【铃兰】抹胸欧根纱刺绣...",text:"自营",price:"￥299",num1:"￥1460",num2:325},
            {id:10,imgurl:"../img/c6.png",title:"免邮费试纱【扶蕊】刺绣齐地拖抹胸欧根纱...",text:"自营",price:"￥199",num1:"￥999",num2:520},
        ]
        let load=this.load;
        let that=this;
        let myTimer;

        let arrb = newarr.filter((v,i)=>{
            if(i<that.state.num){
                return v
            }
        })
        that.setState({
            arr:arrb
        })

        function callback(){
            let top=load.getBoundingClientRect().top;
            let wHeight=window.screen.height;
            if(top && top<wHeight){
                let arrc = newarr.filter((v,i)=>{
                    if(i<that.state.num+2){
                        return v
                    }
                })
                that.setState({
                    arr:arrc,
                    num:that.state.num+2
                })
            }
        }
        window.addEventListener('scroll',()=>{
            if(myTimer){
                clearTimeout(myTimer);
            }
            myTimer=setTimeout(callback,1000);
        },false)
    }
    render() {
        return (
            <div>
                <div className="stnBox">
                    {
                        this.state.arr.map((v,i)=>{
                            return (
                                <div key={i}>
                                    <img src={v.imgurl}/>
                                    <span className="red">{v.text}</span>
                                    <p>{v.title}</p>
                                    <strong>{v.price}</strong>
                                    <span>{v.num1}</span>
                                    <em>{v.num2}</em>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="loadbox" ref={(a)=>{this.load=a}}><img className="loadimg" src="../img/loading.gif"/></div>
            </div>
        )
    }
}
