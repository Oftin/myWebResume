import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const AA_FC_ANIMATION_TITLE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos="fade-left" data-aos-offset='500' data-aos-duration="1000">
                <div className='font-bold text-3xl text-blue-400 font-mono-400'>{ Data[4].title }</div>
                <div className='border-solid h-1 bg-yellow-500 border-yellow-500 w-70'></div>
            </div>
        </Fragment>
    );
};

export default AA_FC_ANIMATION_TITLE;