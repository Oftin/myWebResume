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
            <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='750'>
                <img className='cursor-pointer transform scale-50 sm:scale-100 -mt-36 sm:mt-0' src={ Column } alt=''/>
            </div>
        </Fragment>
    );
};

export default C_FC_ANIMATION_COLUMN;