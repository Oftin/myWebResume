import React, { Component, Fragment } from 'react';
import ED_FC_ANIMATION_TITLE from './ED_FunctionComponent/ED_FC_ANIMATION_TITLE';
import ED_FC_ANIMATION_MASTER_UNIVERSITY_IMG from './ED_FunctionComponent/ED_FC_ANIMATION_MASTER_UNIVERSITY_IMG';
import ED_FC_ANIMATION_MASTER_UNIVERSITY_INFO from './ED_FunctionComponent/ED_FC_ANIMATION_MASTER_UNIVERSITY_INFO';
import ED_FC_ANIMATION_MASTER_PROJECT from './ED_FunctionComponent/ED_FC_ANIMATION_MASTER_PROJECT';
import ED_FC_ANIMATION_MASTER_PROJECT_INFO from './ED_FunctionComponent/ED_FC_ANIMATION_MASTER_PROJECT_INFO';
import ED_FC_ANIMATION_SEPARATOR_LINE from './ED_FunctionComponent/ED_FC_ANIMATION_SEPARATOR_LINE';
import ED_FC_ANIMATION_ENGINEER_UNIVERSITY_IMG from './ED_FunctionComponent/ED_FC_ANIMATION_ENGINEER_UNIVERSITY_IMG';
import ED_FC_ANIMATION_ENGINEER_UNIVERSITY_INFO from './ED_FunctionComponent/ED_FC_ANIMATION_ENGINEER_UNIVERSITY_INFO';
import ED_FC_ANIMATION_ENGINEER_PROJECT from './ED_FunctionComponent/ED_FC_ANIMATION_ENGINEER_PROJECT';
import ED_FC_ANIMATION_ENGINEER_PROJECT_INFO from './ED_FunctionComponent/ED_FC_ANIMATION_ENGINEER_PROJECT_INFO';
export class EducationSection extends Component {
    render() {
        return (
            <Fragment>
                    <ED_FC_ANIMATION_TITLE />
                    <div className='pt-20 sm:pt-10 md:p-20 sm:text-md text-bold'>
                        <div className='sm:my-20 -mt-10 sm:mt-0'>
                            <div className='grid grid-cols-7 grid-flow-col gap-2'>
                                <div className='col-start-1 col-span-2'>
                                    <ED_FC_ANIMATION_MASTER_UNIVERSITY_IMG />
                                </div>
                                <div className='col-start-3 col-span-5 sm:mt-3'>
                                    <ED_FC_ANIMATION_MASTER_UNIVERSITY_INFO />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4 mt-10 sm:mt-20'>
                                <ED_FC_ANIMATION_MASTER_PROJECT />
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4'>
                                <div className='col-start-1 col-end-1 mb-5 -mt-2 sm:-mt-4 flex justify-center'>
                                    <ED_FC_ANIMATION_MASTER_PROJECT_INFO />
                                </div>
                            </div>
                        </div>

                        <ED_FC_ANIMATION_SEPARATOR_LINE />

                        <div className='mt-10 sm:mt-22'>
                            <div className='sm:mt-0 grid grid-cols-7 grid-flow-col gap-2'>
                                <div className='col-start-1 col-span-2'>
                                    <ED_FC_ANIMATION_ENGINEER_UNIVERSITY_IMG />
                                </div>
                                <div className='col-start-3 col-span-5 sm:mt-3'>
                                    <ED_FC_ANIMATION_ENGINEER_UNIVERSITY_INFO />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4 -mt-10 sm:mt-20'>
                                <ED_FC_ANIMATION_ENGINEER_PROJECT />
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4 sm:mt-4'>
                                <div className='col-start-1 col-end-1 -mt-24 sm:-mt-8 md:-mt-4 flex justify-center'>
                                    <ED_FC_ANIMATION_ENGINEER_PROJECT_INFO />
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}