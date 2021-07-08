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
                <div className='p-20 ml-4 text-md text-bold'>
                    <div className='grid grid-cols-2 grid-flow-col gap-4'>
                        <div className='col-start-1 col-end-1 space-y-1'>
                            <AA_FC_ANIMATION_IMG />
                            <AA_FC_ANIMATION_IMG_INFO/>
                        </div>
                        <div className='col-start-2 col-end-2 space-y-1 pt-6 font-semibold text-coolGray-400'>
                            <AA_FC_ANIMATION_INFO />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}