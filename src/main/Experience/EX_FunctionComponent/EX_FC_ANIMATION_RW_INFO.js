import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const EX_FC_ANIMATION_RW_INFO = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='1000' data-aos-delay='500'>
                <div> - { Data[2].description[0] }</div>
                <div> - { Data[2].description[1] }</div>
                <div> - { Data[2].description[2] }</div>
                <div> - { Data[2].description[3] }</div>
                <div> - { Data[2].description[4] }</div>
            </div>
        </Fragment>
    );
};

export default EX_FC_ANIMATION_RW_INFO;