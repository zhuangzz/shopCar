import React ,{Component} from "react"
import "./calculate.css"


class Calculate extends Component {
  handleCal=(t,i)=>{
    console.log(i)
    this.props.calculate(t,i)
  }

  render(){
    const {goods,result}=this.props
    const goodsList=goods.map(t=>(
      <div key={t.id} className="goods-list">
        <img src={t.imggoods} alt=""/>
        <div className="goods-right">
          <div className="goods-title">
            <h3>{t.title}</h3>
            <p className="goods-price">$ {t.price}</p>
          </div>
          <div className="calculate-total">
            <span onClick={()=>this.handleCal("min",t.id)}>-</span>
            <div className="cal-num">{t.num}</div>
            <span onClick={()=>this.handleCal("add",t.id)}>+</span>
          </div>
        </div>

      </div>
    ))
    return(
      <div className="calculate">
        <div className="results">
          <div className="result">
            <span className="cal-result">{result}</span> <span>元</span>
          </div>        
        </div>

        <div className="goods-all">
          {goodsList}
        </div>
      </div>
    )
  }
}
export default Calculate
