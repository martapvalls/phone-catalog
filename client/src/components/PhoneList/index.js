import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhonesCatalog } from '../../redux/actions';
import Loader from 'react-loader-spinner';
import Phone from '../Phone/Phone'
import './index.css'

const PhoneList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getPhones = () => dispatch(getPhonesCatalog())
        getPhones();
    }, [dispatch])
    
    const phones = useSelector( state => state.phones)
    const error = useSelector( state => state.error)
    const isLoading = useSelector( state => state.isLoading)
    
    return ( 
        <Fragment>
            <h1 className="phones__title">Phone catalog</h1>

            {error ? <p className="error"> There's an error, please try again later</p> : null}
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

            <ul className="phones__list">
            { phones.length === 0 && !error && !isLoading ? <h4> There's no phones </h4> : (
                phones.map(phone => (
                    <li key={phone.id} className="phone">
                        <Phone 
                            phone={phone}
                        />
                    </li>
                ))
            )}
            </ul>
        </Fragment>
    );
}
 
export default PhoneList;