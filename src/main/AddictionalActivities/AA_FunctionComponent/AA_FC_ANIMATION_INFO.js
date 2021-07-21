import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const AA_FC_ANIMATION_INFO = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-left' data-aos-duration='1000' data-aos-delay='750'>
                <div className='flex justify-center'>
                    <div>
                        { Data[4].club[0] }
                    </div>
                    <div className='text-coolGray-600'>
                        { Data[4].club[1] }
                    </div>
                </div>
                <div className='flex justify-center pt-6'>{ Data[4].time[0] }</div>
                <div className='flex justify-center'>{ Data[4].time[1] }</div>
                <div className='flex justify-center pt-6'>{ Data[4].tasksTitle }</div>
                <div className='flex justify-center text-coolGray-600'>{ Data[4].tasks[0] }</div>
                <div className='flex justify-center text-coolGray-600'>{ Data[4].tasks[1] }</div>
                <div className='flex justify-center text-coolGray-600'>{ Data[4].tasks[2] }</div>
            </div>
        </Fragment>
    );
};

export default AA_FC_ANIMATION_INFO;