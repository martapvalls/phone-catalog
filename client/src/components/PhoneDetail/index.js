import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPhonesCatalog } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner';
import './index.css';

const PhoneDetail = ({match}) => {
    const dispatch = useDispatch();
    const phones = useSelector( state => state.phones)
    const isLoading = useSelector( state => state.isLoading)
    const [phone, setPhone ] = useState({})
    const imgPath = '/phone-images/'

    useEffect(() => {
            const getPhones = () => dispatch(getPhonesCatalog())
            getPhones();
    }, [dispatch])

    useEffect(() => {
        const phoneDetail = phones.find(phone => phone.id === Number(match.params.id))
        setPhone(phoneDetail)
    },[phones, match.params.id])

    return ( 
        <div className="container">
            <Link to={'/'} className="phone__back"> <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x"/> </Link>
            {isLoading && phones.length === 0 ?  
                <div className="phones__loader">
                    <Loader
                        type="Puff"
                        color="rgb(132, 198, 255)"
                        height={100}
                        width={100}
                    />
                </div>
            : null}
            {phone && 
            <Fragment>
                <h1> {phone.name} </h1>
                <div className="phone__details">
                    <img 
                    src={`${process.env.PUBLIC_URL}${imgPath}${phone.imageFileName}`}
                    alt={phone.name}
                    className = 'phone__detail-img'
                    />
                    <div className="phone__details-p">
                        <p> {phone.description} </p>
                        <p> Color: <FontAwesomeIcon icon={faCircle} size="1x" style={{color: phone.color}}/> {phone.color} </p>
                        <p> Screen: {phone.screen}"</p>
                        <p> Processor: {phone.processor} </p>
                        <p> Ram: {phone.ram}GB </p>
                        <span className="phone__detail-price"> Price: {phone.price}€</span>
                    </div>
                </div>
            </Fragment>}
        </div>
     );
}
 
export default PhoneDetail;