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
            <img src={ university } alt='' data-aos="zoom-out-up" data-aos-offset='350' data-aos-duration="1000" data-aos-delay="500" className='bg-gray-400 rounded-lg h-40 w-auto sm:-ml-16 md:ml-14 ld:ml-24'/>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_MASTER_UNIVERSITY_IMG;