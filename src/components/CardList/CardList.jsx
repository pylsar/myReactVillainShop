import React from "react";

import Buy from '../Buy/Buy';
import Btn from '../Btn/Btn';
import Description from '../Description/Description';

import './CardList.scss'
import PizzaImg from '../../assets/img/pizza.jpg'
import MeatIcon from '../../assets/img/meat.png'


class CardList extends React.Component {
  state = {
    chooseMeat: false,
    chooseFish: false,
    chooseKolb: false,
    sum: 0
  };
  handleMeat = () => {
    this.setState({
      chooseMeat: true,
      sum: this.state.sum + 500
    });
  };
  handleMeatDel = () => {
    this.setState({
      chooseMeat: false,
      sum: this.state.sum - 500
    });
  };

  handleFish = () => {
    this.setState({
      chooseFish: true,
      sum: this.state.sum + 400
    });
  };
  handleFishDel = () => {
    this.setState({
      chooseFish: false,
      sum: this.state.sum - 400
    });
  };
  handleKolb = () => {
    this.setState({
      chooseKolb: true,
      sum: this.state.sum + 399
    });
  };
  handleKolbDel = () => {
    this.setState({
      chooseKolb: false,
      sum: this.state.sum - 399
    });
  };

  render() {
    return (
      <div className="card-list">
        <div className="card-list__box">
            <div className="card-list__box__left">
                <img src={PizzaImg} alt="Пицца"/>
            </div>
            <div className="card-list__box__right">
                <div className="card-list__box__item">
                    <div className={this.state.chooseMeat ? "one" : "two"}>
                        <img src={MeatIcon} alt="Свинина"/>
                    </div>
                    <Buy name="свинина" price={500} />
                    {this.state.chooseMeat ? (
                    <Btn btnNameAdd="Удалить" onClick={this.handleMeatDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleMeat} />
                    )}
                </div>
                <div className="card-list__box__item">
                    <div className={this.state.chooseMeat ? "one" : "two"}>
                        <img src={MeatIcon} alt="Свинина"/>
                    </div>
                    <Buy name="семга" price={400} />
                    {this.state.chooseFish ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleFishDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleFish} />
                    )}
                </div>
                <div className="card-list__box__item">
                    <div className={this.state.chooseMeat ? "one" : "two"}>
                        <img src={MeatIcon} alt="Свинина"/>
                    </div>
                    <Buy name="колбаска" price={399} />
                    {this.state.chooseKolb ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleKolbDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleKolb} />
                    )}
                </div>

                <span>
                Вы добавили:
                {!this.state.chooseMeat &
                !this.state.chooseFish &
                !this.state.chooseKolb
                    ? "ничего"
                    : ""}
                {`
                ${this.state.chooseMeat ? "meat" : ""}
                ${this.state.chooseFish ? "fish" : ""}
                ${this.state.chooseKolb ? "колбаса" : ""}
                `}
                </span>
                <div>
                    <span>С Вас</span>
                    <span> {this.state.sum}</span>
                    <span>золотых</span>
                </div>
            </div>
        </div>
        <Description />
      </div>
    );
  }
}

export default CardList;
