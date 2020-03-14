import React from "react";

import Buy from '../../Buy/Buy';
import Btn from '../../Btn/Btn';
import Description from '../../Description/Description';

import '../Pages.scss'
import NuttsImg from '../../../assets/img/ice.jpg'
import WalnutIcon from '../../../assets/img/nut1.png'
import PeanutIcon from '../../../assets/img/nut2.png'



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
  


  render() {
    return (
      <div className="pages">
        <div className="pages__box">
            <div className="pages__box__left">
                <img src={NuttsImg} alt="Мороженное"/>
            </div>
            <div className="pages__box__right">
                <div className="pages__box__item">
                    <div className={this.state.chooseWalnut ? "img-full" : "img-transparent "}>
                        <img src={WalnutIcon} alt="Грецкий орех"/>
                    </div>
                    <Buy name="грецкий орех" price={188} />
                    {this.state.chooseWalnut ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleWalnutDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleWalnut} />
                    )}
                </div>
                <div className="pages__box__item">
                    <div className={this.state.choosePeanut ? "img-full" : "img-transparent "}>
                        <img src={PeanutIcon} alt="Арахис"/>
                    </div>
                    <Buy name="арахис" price={90} />
                    {this.state.choosePeanut ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handlePeanutDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handlePeanut} />
                    )}
                </div>
                <div className="pages__box__result">       
                  <span>
                  Вы добавили:
                  {!this.state.chooseWalnut &
                  !this.state.choosePeanut
                      ? "ничего"
                      : ""}
                  {`
                  ${this.state.chooseWalnut ? "Грецкий орех" : ""}
                  ${this.state.choosePeanut ? "Арахис" : ""}
                  `}
                  </span>
                  <div>
                    <span>С Вас</span> <span> {this.state.sum}</span> <span>золотых</span>    
                  </div>
                </div>
            </div>
        </div>
        <Description 
        descr="У Вашего друга нелюбовь к орешкам? ну такое точно нельзя пропускать... Мы даем Вам возможность приобрести немного арахиса и грецких орехов. Чательно размелчим и равномерно добавим в мороженое - Ваш злодейский вечер пройдет великолепно!"/>
      </div>
    );
  }
}

export default Nutts;


