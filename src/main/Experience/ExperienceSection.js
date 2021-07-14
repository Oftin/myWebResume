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
                <div className='py-10 ld:p-20 ml-4 text-md text-bold'>
                    <div className='grid sm:grid-cols-4 ld:grid-cols-5 sm:gap-x-10 sm:gap-y-4 md:gap-2 relative p-10'>
                        <div className='flex justify-end col-start-1 col-end-1 relative sm:-ml-14 md:pr-8 ld:pr-0 ld:ml-0 ld:right-16 font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_RW_TIME />
                        </div>
                        <div className='col-start-2 col-span-3 text-xl font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_RW_COMPANY />
                        </div>
                        <div className='col-start-2 col-span-3 text-coolGray-500'>
                            <EX_FC_ANIMATION_RW_INFO />
                        </div>
                        <div className='sm:row-start-2 sm:row-end-2 md:col-start-5 md:col-end-5 sm:-ml-10 sm:mt-2 md:-ml-0 md:mr-4 md:-mt-6 ld:-mt-9 ld:mr-0 ld:ml-0'>
                            <EX_FC_ANIMATION_RW_IMG />
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-4 ld:grid-cols-5 sm:gap-x-10 sm:gap-y-4 md:gap-2 relative p-10'>
                        <div className='flex justify-end col-start-1 col-end-1 relative sm:-ml-14 md:pr-8 ld:pr-0 ld:ml-0 ld:right-16 font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_TIME />
                        </div>
                        <div className='col-start-2 col-span-3 text-xl font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_COMPANY />
                        </div>
                        <div className='col-start-2 col-span-3 text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_INFO />
                        </div>
                        <div className='sm:row-start-2 sm:row-end-2 md:col-start-5 md:col-end-5 sm:-ml-10 sm:mt-0 md:-ml-10 md:mr-4 md:-mt-6 ld:mr-0 ld:ml-0'>
                            <EX_FC_ANIMATION_UPC_IMG />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}