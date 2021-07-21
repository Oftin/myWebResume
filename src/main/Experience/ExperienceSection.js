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
                <div className='lg:p-20 text-xs sm:text-base text-bold m-auto'>
                    <div className='grid grid-cols-9 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-4 gap-2 sm:gap-x-4 relative pt-10 pb-6'>
                        <div className='flex col-start-1 col-span-2 lg:col-start-1 lg:col-end-1 relative font-bold text-coolGray-500 text-center m-auto'>
                            <EX_FC_ANIMATION_RW_TIME />
                        </div>
                        <div className='col-start-3 col-span-7 md:col-span-5 lg:col-start-2 lg:col-span-3 xl:col-start-2 xl:col-span-2 text-base sm:text-xl font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_RW_COMPANY />
                        </div>
                        <div className='col-start-3 col-span-7 md:col-span-5 lg:col-start-2 lg:col-span-3 xl:col-start-2 xl:col-span-2 text-coolGray-500'>
                            <EX_FC_ANIMATION_RW_INFO />
                        </div>
                        <div className='row-start-2 row-end-2 lg:row-start-1 lg:row-span-2 lg:col-start-5 lg:col-end-5 xl:col-start-4 xl:col-end-4 col-start-1 col-span-2 m-auto items-center'>
                            <EX_FC_ANIMATION_RW_IMG />
                        </div>
                    </div>
                    <div className='grid grid-cols-9 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-4 gap-2 sm:gap-x-4 relative pt-6 pb-16'>
                        <div className='flex col-start-1 col-span-2 lg:col-start-1 lg:col-end-1 relative font-bold text-coolGray-500 text-center m-auto'>
                            <EX_FC_ANIMATION_UPC_TIME />
                        </div>
                        <div className='col-start-3 col-span-7 md:col-span-5 lg:col-start-2 lg:col-span-3 xl:col-start-2 xl:col-span-2 text-base sm:text-xl font-bold text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_COMPANY />
                        </div>
                        <div className='col-start-3 col-span-7 md:col-span-5 lg:col-start-2 lg:col-span-3 xl:col-start-2 xl:col-span-2 text-coolGray-500'>
                            <EX_FC_ANIMATION_UPC_INFO />
                        </div>
                        <div className='row-start-2 row-end-2 lg:row-start-1 lg:row-span-2 lg:col-start-5 lg:col-end-5 xl:col-start-4 xl:col-end-4 col-start-1 col-span-2 m-auto items-center'>
                            <EX_FC_ANIMATION_UPC_IMG />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}