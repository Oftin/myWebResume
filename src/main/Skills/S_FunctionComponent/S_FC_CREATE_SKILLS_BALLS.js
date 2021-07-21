import React, { Fragment } from 'react';

const S_FC_CREATE_SKILLS_BALLS = ({ activeSkillBall, emptySkillBall, valueActive }) => {

    let componentResult = [emptySkillBall, emptySkillBall, emptySkillBall, emptySkillBall, emptySkillBall];
    const activeSteps = valueActive;

    for (let i = 0; i < activeSteps; i++) {
        componentResult[i] = activeSkillBall;
    }

    return (
        <Fragment>
            <div className='flex space-x-1 md:space-x-2'>
                <div className={ componentResult[0] }></div>
                <div className={ componentResult[1] }></div>
                <div className={ componentResult[2] }></div>
                <div className={ componentResult[3] }></div>
                <div className={ componentResult[4] }></div>
            </div>
        </Fragment>
    );
};

export default S_FC_CREATE_SKILLS_BALLS;