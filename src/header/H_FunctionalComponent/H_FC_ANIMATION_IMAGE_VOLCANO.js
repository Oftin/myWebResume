import React, { Fragment, useEffect } from 'react';
import imgHeader from '../../img/vulcanSicilia_FHD.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

const H_FC_ANIMATION_IMAGE_VOLCANO = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <img aos-data='zoom-in' className='relative z-0' src={ imgHeader } alt=''/>
        </Fragment>
    );
};

export default H_FC_ANIMATION_IMAGE_VOLCANO;