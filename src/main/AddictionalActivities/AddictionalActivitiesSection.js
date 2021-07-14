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
                <div className='py-10 md:p-20 ml-4 text-md text-bold'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 grid-flow-col gap-4'>
                        <div className='sm:row-start-1 sm:row-end-1 md:col-start-1 md:col-end-1 space-y-1 sm:-ml-5 md:ml-0'>
                            <AA_FC_ANIMATION_IMG />
                            <AA_FC_ANIMATION_IMG_INFO/>
                        </div>
                        <div className='sm:row-start-2 sm:row-end-2 md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 space-y-1 sm:pt-20 md:pt-6 font-semibold text-coolGray-400 sm:-ml-5 md:ml-0 sm:mb-16 md:mb-0'>
                            <AA_FC_ANIMATION_INFO />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}