import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const S_FC_ANIMATION_INDUSTRIAL_SKILLS = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos="fade-left" data-aos-offset='500' data-aos-duration="1000">
                <div className='row-start-2 row-end-2 font-semibold text-coolGray-500'>{ Data[5].Industial[0] }</div>
                <div className='row-start-3 row-end-3 font-semibold text-coolGray-500'>{ Data[5].Industial[1] }</div>
                <div className='row-start-4 row-end-4 font-semibold text-coolGray-500'>{ Data[5].Industial[2] }</div>
                <div className='row-start-5 row-end-5 font-semibold text-coolGray-500'>{ Data[5].Industial[3] }</div>
                <div className='row-start-6 row-end-6 font-semibold text-coolGray-500'>{ Data[5].Industial[4] }</div>
            </div>
        </Fragment>
    );
};

export default S_FC_ANIMATION_INDUSTRIAL_SKILLS;