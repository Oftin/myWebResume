import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_TITLE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-left' data-aos-duration='1000' className='-mt-10 sm:-mt-20'>
                <div className='font-bold text-base sm:text-3xl text-blue-400 font-mono-400'>{ Data[0].title }</div>
                <div className='border-solid h-1 bg-yellow-500 border-yellow-500 w-19 sm:w-35'></div>
            </div>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_TITLE;