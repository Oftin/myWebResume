import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const I_FC_ANIMATION_TITLE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-left' data-aos-duration='1000'>
                <div className='font-bold text-base sm:text-3xl text-blue-400 font-mono-400'>{ Data[6].title }</div>
                <div className='border-solid h-1 bg-yellow-500 border-yellow-500 w-16 sm:w-30'></div>
            </div>
        </Fragment>
    );
};

export default I_FC_ANIMATION_TITLE;