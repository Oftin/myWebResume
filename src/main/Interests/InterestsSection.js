import React, { Component, Fragment } from 'react';
import WebSettings from '../../data/webSettings.json';
import I_FC_ANIMATION_IMAGE_INTERESTS from './I_FunctionComponent/I_FC_ANIMATION_IMAGE_INTERESTS';
import I_FC_ANIMATION_TITLE from './I_FunctionComponent/I_FC_ANIMATION_TITLE';

export class InterestsSection extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <I_FC_ANIMATION_TITLE />
                    <div className={ WebSettings[0].contentSection }>
                        <I_FC_ANIMATION_IMAGE_INTERESTS />
                    </div>
                </div>
            </Fragment>
        )
    }
}