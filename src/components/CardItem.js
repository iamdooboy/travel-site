import React from 'react';
import { Link } from 'react-router-dom'

function CardItem() {
    return (
        <>
            <li className="cards__item">
                <Link className="cards_item_link">
                    <figure className="cards__item_pic-wrap">
                        <img src="/images/img-1.jpg" alt="Travel Image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item-text">

                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
