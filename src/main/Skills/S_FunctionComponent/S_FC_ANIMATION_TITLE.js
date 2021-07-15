import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const S_FC_ANIMATION_TITLE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos="fade-left" data-aos-offset='500' data-aos-duration="1000" className='mt-10 sm:mt-0'>
                <div className='font-bold text-base sm:text-3xl text-blue-400 font-mono-400'>{ Data[5].title }</div>
                <div className='border-solid h-1 bg-yellow-500 border-yellow-500 w-10 sm:w-18'></div>
            </div>
        </Fragment>
    );
};

export default S_FC_ANIMATION_TITLE;