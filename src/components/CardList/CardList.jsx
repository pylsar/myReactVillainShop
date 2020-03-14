import React from 'react'

import Buy from '../Buy/Buy'

import './CardList.scss'

const CardList = () => {
    return (
        <main className="card_list">
            <div className="card_list__box">
                <div className="card_list__box__img">
                    <img src="https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                </div>
                <div className="card_list__box__buy">
                    <div>
                        <Buy name="свининка" price={500} rub="рубликов" add="Добавить вкусняшку"/>
                        <Buy name="семгочка" price={400} rub="рубликов" add="Добавить вкусняшку"/>
                        <Buy name="колбаска" price={300} rub="рубликов" add="Добавить вкусняшку"/>
                    </div>
                    <div className="card_list__box__result">
                        <span>Добавлено:</span><span>0</span>
                    </div>
                    <div className="card_list__box__result">
                        <span>Стоимость:</span><span>0</span>
                    </div>
                </div>
            </div>
            <div>
                <h2>Описание</h2>
                <p>тут текст описания</p>
            </div>
        </main>
    )
}

export default CardList