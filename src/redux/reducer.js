import nav01 from '../img/nav01.png'
import nav02 from '../img/nav02.png'
import nav03 from '../img/nav03.png'
import nav04 from '../img/nav04.png'
import nav05 from '../img/nav05.png'
import nav06 from '../img/nav06.png'
import nav07 from '../img/nav07.png'
import nav08 from '../img/nav08.png'
import nav09 from '../img/nav09.png'
import nav10 from '../img/nav10.png'
var obja=[
    {id:1,title:"婚纱礼服",imgurl:nav01},
    {id:2,title:"婚房布置",imgurl:nav02},
    {id:3,title:"婚鞋箱包",imgurl:nav03},
    {id:4,title:"喜糖回礼",imgurl:nav04},
    {id:5,title:"婚礼百货",imgurl:nav05},
    {id:6,title:"婚庆床品",imgurl:nav06},
    {id:7,title:"睡衣贴胸",imgurl:nav07},
    {id:8,title:"良辰吉市",imgurl:nav08},
    {id:9,title:"美妆护肤",imgurl:nav09},
    {id:10,title:"全部分类",imgurl:nav10}
]
export function data(state=obja,action){
    switch (action.type) {
        default:
            return state;
            break;
    }
}

// import c1 from '../img/c1.png'
// import c2 from '../img/c2.png'
// import c3 from '../img/c3.png'
// import c4 from '../img/c4.png'
// import c5 from '../img/c5.png'
// import c6 from '../img/c6.png'
// var objb=[
//     { id: 1, title: "中式婚礼创意套装结婚伴手礼", imgurl: c1, num: 9.9 },
//     { id: 2, title: "结婚中式陶瓷喜碗喜杯敬茶杯", imgurl: c2, num: 22 },
//     { id: 3, title: "中式烫金流苏喜糖盒", imgurl: c3, num: 0.48 },
//     { id: 4, title: "【50个装】婚礼纪独家定制", imgurl: c4, num: 16 },
//     { id: 5, title: "新娘嫁妆套装 8款可选", imgurl: c5, num: 39.9 },
//     { id: 6, title: "婚礼手持礼炮 3款可选", imgurl: c6, num: 6.8 }
// ]