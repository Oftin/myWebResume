import React, { Fragment, useEffect } from 'react';
import marsRover from '../../../img/ERC2019.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

const AA_FC_ANIMATION_IMG = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='1000' data-aos-delay='500' >
                <img src={ marsRover } alt='' className='flex justify-center rounded-lg md:h-70'/>
            </div>
        </Fragment>
    );
};

export default AA_FC_ANIMATION_IMG;