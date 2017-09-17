import React ,{Component} from "react"
import "./good.css"




class Goods extends Component {

  handleBuy=(i)=>{

    this.props.handlAddUp(i)
  }
  render(){

    const { imgUrl }= this.props
    const goodList=imgUrl.map(t=>(
      <div key={t.id} className="goods-img">
        <img src={t.imgall} alt=""/>
        <button  className={`buy-button ${t.background && 'buy-buttons'}`} onClick={()=>this.handleBuy(t.id)}
        disabled={t.disabled}>{t.buy}</button>
      </div>
    ))
    return(
      <div className="goods">
        <div className="good">
          { goodList }
        </div>
      </div>
    )
  }
}
export default Goods
