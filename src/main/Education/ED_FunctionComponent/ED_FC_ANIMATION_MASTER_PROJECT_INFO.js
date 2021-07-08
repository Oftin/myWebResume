import React, { Fragment, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_MASTER_PROJECT_INFO = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-up' data-aos-duration='750' data-aos-delay='2000'>
                <div className='row-start-2 row-end-2 text-coolGray-500'>Master degree project</div>
            </div>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_MASTER_PROJECT_INFO;