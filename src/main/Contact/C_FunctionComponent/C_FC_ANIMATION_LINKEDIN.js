import React, { Fragment, useEffect } from 'react';
import linkedin from '../../../img/640px-LinkedIn_Logo.svg.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const C_FC_ANIMATION_LINKEDIN = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='2500'>
                <img src={ linkedin } alt='' className='cursor-pointer h-10 w-auto'/>
            </div>
        </Fragment>
    );
};

export default C_FC_ANIMATION_LINKEDIN;