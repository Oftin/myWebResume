import React, { Component, Fragment } from 'react';
import WebSettings from '../../data/webSettings.json';
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
                    <div className={ WebSettings[0].contentSection }>
                        <div className='my-20 mt-0'>
                            <div className='grid grid-cols-5 grid-flow-col gap-2'>
                                <div className='col-start-1 col-span-2'>
                                    <ED_FC_ANIMATION_MASTER_UNIVERSITY_IMG />
                                </div>
                                <div className='col-start-3 col-span-3 mt-3 -ml-16'>
                                    <ED_FC_ANIMATION_MASTER_UNIVERSITY_INFO />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4 mt-20'>
                                <ED_FC_ANIMATION_MASTER_PROJECT />
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4'>
                                <div className='col-start-1 col-end-1 mb-5 -mt-4 flex justify-center'>
                                    <ED_FC_ANIMATION_MASTER_PROJECT_INFO />
                                </div>
                            </div>
                        </div>

                        <ED_FC_ANIMATION_SEPARATOR_LINE />

                        <div className='mt-22'>
                            <div className='grid grid-cols-5 grid-flow-col gap-2'>
                                <div className='col-start-1 col-span-2'>
                                    <ED_FC_ANIMATION_ENGINEER_UNIVERSITY_IMG />
                                </div>
                                <div className='col-start-3 col-span-3 mt-3 -ml-16'>
                                    <ED_FC_ANIMATION_ENGINEER_UNIVERSITY_INFO />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4 mt-16'>
                                <ED_FC_ANIMATION_ENGINEER_PROJECT />
                            </div>
                            <div className='grid grid-cols-1 grid-flow-col gap-4 mt-4'>
                                <div className='col-start-1 col-end-1 mb-5 -mt-4 flex justify-center'>
                                    <ED_FC_ANIMATION_ENGINEER_PROJECT_INFO />
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}