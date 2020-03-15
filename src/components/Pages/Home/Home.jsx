import React from 'react'

import './Home.scss'
import GavsIcon from '../../../assets/img/gavz.png'
import GrinchIcon from '../../../assets/img/grinch.png'

const Home = () => {
    return (
        <div className="home">
            <h1>Магазин Злодея</h1>
            <p className="home--subtitle">Только в нашем магазине можно стать супер злодеем</p>
            <blockquote>
                "Всегда закупаюсь в этом магазине и вам советую" - профессор Мориарти
            </blockquote>
            <blockquote>
                "Мой любимы магазин, здесь всегда есть вещи для моих злодейских штучек" - Шапокляк
            </blockquote>
            <blockquote>
                "Мы с братьями часто сюда заходим, очень злодейский магазин" - братья Гавс
            </blockquote>
            <blockquote>
                "Захожу сюда в каждый канун Рождества" - Гринч
            </blockquote>
            <img src={GavsIcon} alt="Братья Гавс"/>
            <img src={GrinchIcon} alt="Гринч"/>
        </div>
    )
}

export default Home
