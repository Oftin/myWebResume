import React, { Component, Fragment } from 'react';
import EX_FC_ANIMATION_TITLE from './EX_FunctionComponent/EX_FC_ANIMATION_TITLE'
import EX_FC_ANIMATION_RW_TIME from './EX_FunctionComponent/EX_FC_ANIMATION_RW_TIME';
import EX_FC_ANIMATION_RW_COMPANY from './EX_FunctionComponent/EX_FC_ANIMATION_RW_COMPANY';
import EX_FC_ANIMATION_RW_INFO from './EX_FunctionComponent/EX_FC_ANIMATION_RW_INFO';
import EX_FC_ANIMATION_RW_IMG from './EX_FunctionComponent/EX_FC_ANIMATION_RW_IMG';
import EX_FC_ANIMATION_UPC_TIME from './EX_FunctionComponent/EX_FC_ANIMATION_UPC_TIME';
import EX_FC_ANIMATION_UPC_COMPANY from './EX_FunctionComponent/EX_FC_ANIMATION_UPC_COMPANY';
import EX_FC_ANIMATION_UPC_INFO from './EX_FunctionComponent/EX_FC_ANIMATION_UPC_INFO';
import EX_FC_ANIMATION_UPC_IMG from './EX_FunctionComponent/EX_FC_ANIMATION_UPC_IMG';

export class ExperienceSection extends Component {
    render() {
        return (
            <Fragment>
                <EX_FC_ANIMATION_TITLE />
                <div className='p-20 ml-4 text-md text-bold'>
                    <div className='grid grid-cols-5 gap-2 relative p-10'>
                        <div className='flex justify-end col-start-1 col-end-1 relative right-16 font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_RW_TIME />
                        </div>
                        <div className='col-start-2 col-span-3 text-xl font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_RW_COMPANY />
                        </div>
                        <div className='col-start-2 col-span-3 text-coolGray-500 w-11/12'>
                            <EX_FC_ANIMATION_RW_INFO />
                        </div>
                        <div className='col-start-5 col-end-5 -mt-9'>
                            <EX_FC_ANIMATION_RW_IMG />
                        </div>
                    </div>
                    <div className='grid grid-cols-5 gap-2 relative p-10'>
                        <div className='flex justify-end col-start-1 col-end-1 relative right-16 font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_TIME />
                        </div>
                        <div className='col-start-2 col-span-3 text-xl font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_COMPANY />
                        </div>
                        <div className='col-start-2 col-span-3 text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_INFO />
                        </div>
                        <div className='col-start-5 col-end-5 -mt-6'>
                            <EX_FC_ANIMATION_UPC_IMG />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}