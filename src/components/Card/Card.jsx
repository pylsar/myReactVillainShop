import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Header from '../Header/Header'
import Home from '../Pages/Home/Home'
import Pizza from '../Pages/Pizza/Pizza'
import Nutts from '../Pages/Nutts/Nutts'
import Alcohol from '../Pages/Alcohol/Alcohol'
import Auth from '../Auth/Auth'

import './Card.scss'

const Card = () => {
    return (
        <div className="card">
            <Header />
            <Switch>
                <Route path='/' component={Home} exact/>  
                <Route path='/pizza' component={Pizza} exact/>
                <Route path='/nutts' component={Nutts} exact/>
                <Route path='/alcohol' component={Alcohol} exact/>
                <Route path='/auth' component={Auth} exact/> 
            </Switch>
        </div>
    )
}

export default Card