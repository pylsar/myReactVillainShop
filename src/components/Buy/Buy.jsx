import React from 'react'

import './Buy.scss'

const Buy = ({name, add, price, rub}) => {
    return (
        <div className="add">
            <span>{name}</span><span>{price} {rub}</span><button>{add}</button>
        </div>
    )
}

export default Buy