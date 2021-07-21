import React, { Fragment, useEffect } from 'react';
import InterestingIMG from '../../../img/InterestingIMG.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const I_FC_ANIMATION_IMAGE_INTERESTS = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <img data-aos='fade-up' data-aos-duration='1000' data-aos-delay='250' className='relative z-0' src={ InterestingIMG } alt=''/>
        </Fragment>
    );
};

export default I_FC_ANIMATION_IMAGE_INTERESTS;