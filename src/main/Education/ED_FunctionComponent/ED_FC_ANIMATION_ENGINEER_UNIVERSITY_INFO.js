import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_ENGINEER_UNIVERSITY_INFO = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-left' data-aos-offset='350' data-aos-duration='1000' data-aos-delay='1000' className='text-xs sm:text-xl'>
                <div className='text-sm sm:text-xl font-bold text-coolGray-500'>{ Data[1].company }</div>
                <div className='text-coolGray-500 font-mono-400 mt-2 sm:mt-4'>{ Data[1].description[0] }</div>
                <div className='text-coolGray-500 font-mono-400'>{ Data[1].description[1] }</div>
                <div className='text-coolGray-500 mt-2 sm:mt-4'>{ Data[1].degree }</div>
                <div className='text-coolGray-500'>{ Data[1].time }</div>
            </div>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_ENGINEER_UNIVERSITY_INFO;