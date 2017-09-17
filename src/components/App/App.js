import React ,{Component} from "react"
import "./app.css"
import Goods from "../Goods/Goods"
import Calculate from "../Calculate/Calculate"
import imggood1 from "../images/111_03.jpg"
import imggood2 from "../images/222_05.jpg"
import imggood3 from "../images/333_07.jpg"
import goods1 from "../images/goods1_22.jpg"
import goods2 from "../images/goods2_23.jpg"
import goods3 from "../images/goods3_26.jpg"
import goods4 from "../images/goods3_26.jpg"



class App extends Component{

  state={
    imgUrl:[
      {
        id: 1,
        imgall:imggood1,
        buy: "购买",
        background: false,
        disabled:""
      },
      {
        id: 2,
        imgall:imggood2,
        buy: "购买",
        background: false,
        disabled:""
      },
      {
        id: 3,
        imgall:imggood3,
        buy: "购买",
        background: false,
        disabled:""
      }
    ],
    goods:[
      {
        id: 1,
        imggoods:goods1,
        title:"White Shirt",
        price: 43.00,
        num: 2
      },
      {
        id: 2,
        imggoods:goods2,
        title:"Nike Sneakers",
        price: 95.99,
        num: 1
      },
      {
        id: 3,
        imggoods:goods3,
        title:"Simple T-Shirt",
        price: 4.99,
        num: 6
      },
      {
        id: 4,
        imggoods:goods4,
        title:"Blac Cap",
        price: 8.45,
        num:1
      }
    ],
    result:219.39
  }

  handlAddUp=(i)=>{
    console.log(i)
    const { imgUrl }=this.state
    const newImgUrl=imgUrl.map(t=>{
      if(t.id===i){
        return {...t,buy:"已购",background: true,
        disabled:"disabled"}
      }
      return t
    })
    this.setState({
      imgUrl:newImgUrl
    })

  }




  calculate=(j,i)=>{
    const { goods  }=this.state
    const newGoods=goods.map(t=>{
      if(j==="add" && t.id===i){
        this.setState({
          result:Math.round((this.state.result + t.price)*100)/100
        })
        return {...t,num:t.num+1}
      }else if(j==="min" && t.id===i && t.num>=2){
        this.setState({
          result:Math.round((this.state.result - t.price)*100)/100
        })
        return {...t,num:t.num-1}
      }
      return t
    })

    this.setState({
      goods: newGoods
    })
  }




  render(){
    const { imgUrl ,goods,result}= this.state
    return(
      <div className="app">
        
          <Goods imgUrl={ imgUrl }  handlAddUp={this.handlAddUp}/>

          <Calculate goods={goods} calculate={this.calculate} result={result}/>

      </div>
    )
  }
}
export default App
