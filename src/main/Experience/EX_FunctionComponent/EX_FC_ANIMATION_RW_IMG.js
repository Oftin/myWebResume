import React, { Fragment, useEffect } from 'react';
import IndustryRobotIMG from '../../../img/industry-robot.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const EX_FC_ANIMATION_RW_IMG = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-duration='1000' data-aos-delay='750'>
                <img className='h-16 sm:h-26 lg:h-40' src= { IndustryRobotIMG } alt=''/>
            </div>
        </Fragment>
    );
};

export default EX_FC_ANIMATION_RW_IMG;