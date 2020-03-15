import React from "react";

import Buy from '../../Buy/Buy';
import Btn from '../../Btn/Btn';
import Description from '../../Description/Description';

import '../Pages.scss'
import CandiesImg from '../../../assets/img/candies.jpg'
import ConiacIcon from '../../../assets/img/coniac.png'
import TequilaIcon from '../../../assets/img/tequila.png'
import VineIcon from '../../../assets/img/vine.png'

class Alcohol extends React.Component {

    state = {
        chooseConiac: false,
        chooseTequila: false,
        chooseVine: false,
        sum: 0
    }

    handleConiac = () => {
        this.setState({
            chooseConiac: true,
            sum: this.state.sum + 250 
        })
    }

    handleConiacDel = () => {
        this.setState({
            chooseConiac: false,
            sum: this.state.sum - 250
        })
    }

    handleTequila = () => {
        this.setState({
            chooseTequila: true,
            sum: this.state.sum + 300
        })
    }

    handleTequilaDel = () => {
        this.setState({
            chooseTequila: false,
            sum: this.state.sum - 300
        })
    }

    handleVine = () => {
        this.setState({
            chooseVine: true,
            sum: this.state.sum + 176
        })
    }

    handleVineDel = () => {
        this.setState({
            chooseVine: false,
            sum: this.state.sum - 176
        })
    }
  
  render() {
    return (
      <div className="pages">
        <div className="pages__box">
            <div className="pages__box__left">
                <img src={CandiesImg} alt="Конфеты"/>
            </div>
            <div className="pages__box__right">
                <div className="pages__box__item">
                    <div className="pages__box__item__pic">
                        <img src={ConiacIcon} alt="Коньяк" className={this.state.chooseConiac ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="коньяк" price={250} />
                    {this.state.chooseConiac ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleConiacDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleConiac} />
                    )}
                </div>
                <div className="pages__box__item">
                    <div className="pages__box__item__pic">
                        <img src={TequilaIcon} alt="Текила" className={this.state.chooseTequila ? "img-full" : "img-transparent "}/>
                    </div>
                    <Buy name="текила" price={300} />
                    {this.state.chooseTequila ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleTequilaDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleTequila} />
                    )}
                </div>
                <div className="pages__box__item">
                    <div className="pages__box__item__pic">
                        <img src={VineIcon} alt="Вино" className={this.state.chooseVine ? "img-full" : "img-transparent"}/>
                    </div>
                    <Buy name="вино" price={176} />
                    {this.state.chooseVine ? (
                    <Btn btnNameRemove="Удалить" onClick={this.handleVineDel} />
                    ) : (
                    <Btn btnNameAdd="Добавить" onClick={this.handleVine} />
                    )}
                </div>
                <div className="pages__box__result">       
                  <span>
                  Вы добавили:
                  {!this.state.chooseConiac &
                  !this.state.chooseTequila &
                  !this.state.chooseVine
                      ? "ничего"
                      : ""}
                  {`
                  ${this.state.chooseConiac ? "Коньяк" : ""}
                  ${this.state.chooseTequila ? "Текила" : ""}
                  ${this.state.chooseVine ? "Вино" : ""}
                  `}
                  </span>
                  <div>
                    <span>С Вас</span> <span> {this.state.sum}</span> <span>золотых</span>    
                  </div>
                </div>
            </div>
        </div>
        <Description 
        descr="Ваш друг не употребляет алкоголь? ну так пора добавить алкогольную начинку в любимые конфеты. Всего несколько конфет и вечер станет веселее!"/>
      </div>
    );
  }
}

export default Alcohol;


