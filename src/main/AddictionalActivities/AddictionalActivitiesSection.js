import React, { Component, Fragment } from 'react';
import AA_FC_ANIMATION_TITLE from './AA_FunctionComponent/AA_FC_ANIMATION_TITLE';
import AA_FC_ANIMATION_IMG from './AA_FunctionComponent/AA_FC_ANIMATION_IMG';
import AA_FC_ANIMATION_IMG_INFO from './AA_FunctionComponent/AA_FC_ANIMATION_IMG_INFO';
import AA_FC_ANIMATION_INFO from './AA_FunctionComponent/AA_FC_ANIMATION_INFO';
export class AddictionalActivitiesSection extends Component {
    render() {
        return (
            <Fragment>
                <AA_FC_ANIMATION_TITLE />
                <div className='py-10 xl:p-20 text-xs sm:text-base text-bold'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 grid-flow-col gap-4 xl:gap-0'>
                        <div className='row-start-1 row-end-1 lg:col-start-1 lg:col-end-1 space-y-1 m-auto'>
                            <AA_FC_ANIMATION_IMG />
                            <AA_FC_ANIMATION_IMG_INFO/>
                        </div>
                        <div className='row-start-2 row-end-2 lg:row-start-1 lg:row-end-1 lg:col-start-2 lg:col-end-2 space-y-1 sm:pt-20 lg:pt-6 font-semibold text-coolGray-400 mt-10 sm:mt-0 sm:mb-16 lg:mb-0'>
                            <AA_FC_ANIMATION_INFO />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}