import React from "react"

import Buy from '../../Buy/Buy'
import Btn from '../../Btn/Btn'
import Description from '../../Description/Description'

import '../Pages.scss'
import PizzaImg from '../../../assets/img/pizza.jpg'
import MeatIcon from '../../../assets/img/meat.png'
import FishIcon from '../../../assets/img/fish.png'
import SausegeIcon from '../../../assets/img/kolb.png'

class Pizza extends React.Component {
  state = {
    chooseMeat: false,
    chooseFish: false,
    chooseSausege: false,
    sum: 0
  }

  handleMeat = () => {
    this.setState({
      chooseMeat: true,
      sum: this.state.sum + 500
    })
  }

  handleMeatDel = () => {
    this.setState({
      chooseMeat: false,
      sum: this.state.sum - 500
    })
  }

  handleFish = () => {
    this.setState({
      chooseFish: true,
      sum: this.state.sum + 400
    })
  }

  handleFishDel = () => {
    this.setState({
      chooseFish: false,
      sum: this.state.sum - 400
    })
  }

  handleSausege = () => {
    this.setState({
      chooseSausege: true,
      sum: this.state.sum + 399
    })
  }

  handleSausegeDel = () => {
    this.setState({
      chooseSausege: false,
      sum: this.state.sum - 399
    })
  }

  render() {
    return (
      <div className="pages">
        <div className="pages__box">
            <div className="pages__box__left">
                <img src={PizzaImg} alt="Пицца"/>
            </div>
            <div className="pages__box__right">
                <div className="pages__box__item">
                    <div >
                        <img src={MeatIcon} alt="Свинина" className={this.state.chooseMeat ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="свинина" price={500} />
                    {this.state.chooseMeat ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleMeatDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleMeat} />
                    )}
                </div>
                <div className="pages__box__item">
                    <div >
                        <img src={FishIcon} alt="Рыба" className={this.state.chooseFish ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="семга" price={400} />
                    {this.state.chooseFish ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleFishDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleFish} />
                    )}
                </div>
                <div className="pages__box__item">
                    <div >
                        <img src={SausegeIcon} alt="Колбаса" className={this.state.chooseSausege ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="колбаска" price={399} />
                    {this.state.chooseSausege ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleSausegeDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleSausege} />
                    )}
                </div>
                <div className="pages__box__result">       
                  <span>
                  Вы добавили:
                  {!this.state.chooseMeat &
                  !this.state.chooseFish &
                  !this.state.chooseSausege
                      ? "ничего"
                      : ""}
                  {`
                  ${this.state.chooseMeat ? "Свинина" : ""}
                  ${this.state.chooseFish ? "Семга" : ""}
                  ${this.state.chooseSausege ? "Колбаса" : ""}
                  `}
                  </span>
                  <div>
                    <span>С Вас</span> <span> {this.state.sum}</span> <span>золотых</span>    
                  </div>
                </div>
            </div>
        </div>
        <Description 
        descr="Ваш друг вегетарианец заказал пиццу, какие ингридиенты вы хотите добавить?
        Вы можете добавить сочную свининку или немного рыбки, колбаска тоже будет к месту.
        Используя эти ингридиенты, Вы сможете перетащить Вашего друга на темную сторону
        "/>
      </div>
    )
  }
}

export default Pizza

