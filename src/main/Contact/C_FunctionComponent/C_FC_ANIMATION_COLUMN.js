import React, { Fragment, useEffect } from 'react';
import Column from '../../../img/column.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const C_FC_ANIMATION_COLUMN = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='2000'>
                <img className='cursor-pointer' src={ Column } alt=''/>
            </div>
        </Fragment>
    );
};

export default C_FC_ANIMATION_COLUMN;