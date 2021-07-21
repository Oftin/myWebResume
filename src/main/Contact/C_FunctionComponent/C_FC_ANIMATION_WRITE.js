import React, { Fragment, useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

const C_FC_ANIMATION_WRITE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='1000' data-aos-delay='1000'>
                If you want to contact me, click image below
            </div>
        </Fragment>
    );
};

export default C_FC_ANIMATION_WRITE;