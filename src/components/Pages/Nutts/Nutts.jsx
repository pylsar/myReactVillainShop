import React from "react"

import Buy from '../../Buy/Buy'
import Btn from '../../Btn/Btn'
import Description from '../../Description/Description'

import '../Pages.scss'
import NuttsImg from '../../../assets/img/ice.jpg'
import WalnutIcon from '../../../assets/img/nut1.png'
import PeanutIcon from '../../../assets/img/nut2.png'
import HazelnutIcon from '../../../assets/img/funduk.png'

class Nutts extends React.Component {
  
  state = {
    chooseWalnut: false,
    choosePeanut: false,
    sum: 0
  }

  handleWalnut = () => {
    this.setState({
      chooseWalnut: true,
      sum: this.state.sum + 188
    })
  }

  handleWalnutDel = () => {
    this.setState({
      chooseWalnut: false,
      sum: this.state.sum - 188
    })
  }

  handlePeanut = () => {
    this.setState({
      choosePeanut: true,
      sum: this.state.sum + 90
    })
  }

  handlePeanutDel = () => {
    this.setState({
      choosePeanut: false,
      sum: this.state.sum - 90
    })
  }

  handleHazelnut = () => {
    this.setState({
      chooseHazelnut: true,
      sum: this.state.sum + 300
    })
  }

  handleHazelnutDel = () => {
    this.setState({
      chooseHazelnut: false,
     sum: this.state.sum - 300
    })
  }
  
  render() {
    return (
      <div className="pages">
        <div className="pages__box">
            <div className="pages__box__left">
                <img src={NuttsImg} alt="Мороженное"/>
            </div>
            <div className="pages__box__right">
                <div className="pages__box__item">
                    <div className="pages__box__item__pic">
                        <img src={WalnutIcon} alt="Грецкий орех" className={this.state.chooseWalnut ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="грецкий орех" price={188} />
                    {this.state.chooseWalnut ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleWalnutDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleWalnut} />
                    )}
                </div>
                <div className="pages__box__item">
                    <div className="pages__box__item__pic">
                        <img src={PeanutIcon} alt="Арахис" className={this.state.choosePeanut ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="арахис" price={90} />
                    {this.state.choosePeanut ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handlePeanutDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handlePeanut} />
                    )}
                </div>
                <div className="pages__box__item">
                    <div className="pages__box__item__pic">
                        <img src={HazelnutIcon} alt="Фундук" className={this.state.chooseHazelnut ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="фундук" price={300} />
                    {this.state.chooseHazelnut ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleHazelnutDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleHazelnut} />
                    )}
                </div>
                <div className="pages__box__result">       
                  <span>
                  Вы добавили:
                  {!this.state.chooseWalnut &
                  !this.state.choosePeanut &
                  !this.state.chooseHazelnut
                      ? "ничего"
                      : ""}
                  {`
                  ${this.state.chooseWalnut ? "Грецкий орех" : ""}
                  ${this.state.choosePeanut ? "Арахис" : ""}
                  ${this.state.chooseHazelnut ? "Фундук" : ""}
                  `}
                  </span>
                  <div>
                    <span>С Вас</span> <span> {this.state.sum}</span> <span>золотых</span>    
                  </div>
                </div>
            </div>
        </div>
        <Description 
        descr="У Вашего друга нелюбовь к орешкам? ну такое точно нельзя пропускать... Мы даем Вам возможность приобрести немного орешков. Чательно размельчим и равномерно добавим в мороженое - Ваш злодейский вечер пройдет великолепно!"/>
      </div>
    );
  }
}

export default Nutts


