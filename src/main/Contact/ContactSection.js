import React, { Component, Fragment } from 'react';
import C_FC_ANIMATION_TITLE from './C_FunctionComponent/C_FC_ANIMATION_TITLE'
import C_FC_ANIMATION_WRITE from './C_FunctionComponent/C_FC_ANIMATION_WRITE';
import C_FC_ANIMATION_ARROW from './C_FunctionComponent/C_FC_ANIMATION_ARROW';
import C_FC_ANIMATION_LINKEDIN from './C_FunctionComponent/C_FC_ANIMATION_LINKEDIN';
import C_FC_ANIMATION_COLUMN from './C_FunctionComponent/C_FC_ANIMATION_COLUMN';

export class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <C_FC_ANIMATION_TITLE />
                    <div className='grid grid-cols-3 place-items-center sm:mt-28 ld:mt-36 sm:mb-0 md:mb-10 ld:mb-20'>
                        <div className='col-start-1 col-span-3'>
                            <div className='row-start-1 row-end-1 mb-20 flex justify-center italic font-normal text-xl'>
                                <C_FC_ANIMATION_WRITE />
                            </div>
                            <a href='https://www.linkedin.com/in/kamil-bobrowski-a8a276193/' target='_blank' rel='noreferrer' className='row-start-2 row-end-2 flex justify-center'>
                                <C_FC_ANIMATION_LINKEDIN />
                            </a>
                            <C_FC_ANIMATION_ARROW />
                            <a href='https://www.linkedin.com/in/kamil-bobrowski-a8a276193/' target='_blank' rel='noreferrer' className='row-start-3 row-end-3 flex justify-center -mt-18 -mb-20'>
                                <C_FC_ANIMATION_COLUMN />
                            </a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}