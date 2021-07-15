import React, { Fragment, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const C_FC_ANIMATION_ARROW = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='1000' data-aos-delay='1500'>
                <svg height='80' width='132.4' className='relative inline-block transform scale-50 sm:scale-100 -top-24 -right-36 sm:-right-72'>
                    <path d="M 5 75 C 46 74 77 59 75 6" stroke="#3B82F6" fill="transparent"/>
                    <path d="M 15 80 L 5 75 L 14 67" stroke="#3B82F6" fill="transparent"/>
                </svg>
            </div>
        </Fragment>
    );
};

export default C_FC_ANIMATION_ARROW;