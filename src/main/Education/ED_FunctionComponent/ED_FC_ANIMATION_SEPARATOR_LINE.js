import React, { Fragment, useEffect } from 'react';
import linePNG from '../../../img/line.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_SEPARATOR_LINE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='750' data-aos-delay='1000'>
                <img src={ linePNG } alt=''/>
            </div>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_SEPARATOR_LINE;