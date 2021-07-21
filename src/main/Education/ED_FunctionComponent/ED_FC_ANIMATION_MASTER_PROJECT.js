import React, { Fragment, useEffect } from 'react';
import InProgress from '../../../img/time.png';
import oliveBranchLeft from '../../../img/oliveBranchLeft.png';
import oliveBranchRight from '../../../img/oliveBranchRight.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ED_FC_ANIMATION_MASTER_PROJECT = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div className='mb-5 flex justify-center' data-aos='fade-down' data-aos-duration='750' data-aos-delay='1500'>
                <img src={ oliveBranchLeft } alt='' className='row-start-2 row-end-3 bg-gray-400 rounded-lg h-10 sm:h-20'/>
                <img src={ InProgress } alt='' className='row-start-2 row-end-3 bg-gray-400 rounded-lg h-10 sm:h-20'/>
                <img src={ oliveBranchRight } alt='' className='row-start-2 row-end-3 bg-gray-400 rounded-lg h-10 sm:h-20'/>
            </div>
        </Fragment>
    );
};

export default ED_FC_ANIMATION_MASTER_PROJECT;