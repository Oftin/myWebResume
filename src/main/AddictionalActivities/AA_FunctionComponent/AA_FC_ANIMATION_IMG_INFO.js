import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const AA_FC_ANIMATION_IMG_INFO = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='1000' data-aos-delay='500'>
                <div className='flex justify-center pt-4 font-semibold text-coolGray-600'>{ Data[4].description[0] }</div>
                <div className='flex justify-center font-semibold text-gray-600'>{ Data[4].description[1] }</div>
            </div>
        </Fragment>
    );
};

export default AA_FC_ANIMATION_IMG_INFO;