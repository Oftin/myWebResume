import React, { Fragment, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_ENGINEER_PROJECT_INFO = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='750' data-aos-delay='2000'>
                <div className='text-xs sm:text-base row-start-2 row-end-2 text-coolGray-500'>Engineering degree project</div>
            </div>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_ENGINEER_PROJECT_INFO;