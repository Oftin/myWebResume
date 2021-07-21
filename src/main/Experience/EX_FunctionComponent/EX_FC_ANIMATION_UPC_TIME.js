import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const EX_FC_ANIMATION_UPC_TIME = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='750'>
                { Data[3].time }
            </div>
        </Fragment>
    );
};

export default EX_FC_ANIMATION_UPC_TIME;