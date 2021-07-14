import React, { Fragment } from 'react';

const S_FC_CREATE_SKILLS_BALLS = ({ activeSkillBall, emptySkillBall, valueActive, valueEmpty }) => {

    let componentResult;

    if ( valueActive > 0 ) {
        if (valueActive === 5) {
            componentResult = activeSkillBall;
        } else {

        }
    } else {
        componentResult = emptySkillBall;
    }

    return (
        <Fragment>
            <div className='flex sm:space-x-1 md:space-x-2'>
                <div className={ componentResult }></div>
                <div className={ componentResult }></div>
                <div className={ componentResult }></div>
                <div className={ componentResult }></div>
                <div className={ componentResult }></div>
            </div>
        </Fragment>
    );
};

export default S_FC_CREATE_SKILLS_BALLS;