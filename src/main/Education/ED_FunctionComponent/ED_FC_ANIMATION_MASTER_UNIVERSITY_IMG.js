import React, { Fragment, useEffect } from 'react';
import university from '../../../img/University.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_MASTER_UNIVERSITY_IMG = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <img src={ university } alt='' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-delay="250" className='bg-gray-400 h-20 sm:h-40 m-auto'/>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_MASTER_UNIVERSITY_IMG;