import React, { Component, Fragment } from 'react';
import I_FC_ANIMATION_IMAGE_INTERESTS from './I_FunctionComponent/I_FC_ANIMATION_IMAGE_INTERESTS';
import I_FC_ANIMATION_TITLE from './I_FunctionComponent/I_FC_ANIMATION_TITLE';

export class InterestsSection extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <I_FC_ANIMATION_TITLE />
                    <div className='py-20 lg:p-20 -mt-10 text-md text-bold'>
                        <I_FC_ANIMATION_IMAGE_INTERESTS />
                    </div>
                </div>
            </Fragment>
        )
    }
}