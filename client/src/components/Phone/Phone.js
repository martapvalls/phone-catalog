import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Phone = ({phone}) => {

    const { id, name, price, imageFileName } = phone
    const imgPath = '/phone-images/'

    return ( 
        <Fragment>
            <h3 className='phone__title'>{name}</h3>
            <img 
                src={`${process.env.PUBLIC_URL}${imgPath}${imageFileName}`}
                alt={name}
                className = 'phone__img'
            />
            <span className = 'phone__price'> {price} €</span>

            <Link to={`/phone/${id}`} className ='phone__details-btn'> View Details </Link>
        </Fragment>
     );
}
 
export default Phone;