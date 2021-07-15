import React, { Fragment, useEffect } from 'react';
import ReactPlayer from 'react-player'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_ENGINEER_PROJECT = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div className='col-start-1 col-end-1 mb-5 flex justify-center' data-aos='fade' data-aos-duration='750' data-aos-delay='1500'>
                <div className='col-start-1 col-end-1 flex justify-center -ml-4 md:ml-0'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=V4SdvO030xA' />
                </div>
            </div>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_ENGINEER_PROJECT;