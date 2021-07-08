import React, { Fragment, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const F_FC_ANIMATION = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='1000' data-aos-delay='500'>
                <svg height='200' width='1152'>
                    <path d='M 0 50 C 100 125 150 125 350 75 C 409 60 488 100 607 120 C 759 150 878 50 1151 0 L 1152 200 L 0 200' stroke='#60A5FB' fill='#60A5FB'/>
                </svg>
            </div>
        </Fragment>
    );
};

export default F_FC_ANIMATION;