import React, { Component, Fragment } from 'react';
import Data from '../../data/data.json';
import S_FC_ANIMATION_TITLE from './S_FunctionComponent/S_FC_ANIMATION_TITLE'
import S_FC_CREATE_SKILLS_BALLS from './S_FunctionComponent/S_FC_CREATE_SKILLS_BALLS';

const activeSkillBall = 'bg-blue-400 rounded-full h-4 sm:h-5 w-4 sm:w-5';
const emptySkillBall = 'bg-gray-200 rounded-full h-4 sm:h-5 w-4 sm:w-5';
const titleSkills = 'text-sm sm:text-xl text-black text-blue-500 uppercase mb-5';

export class SkillsSection extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <S_FC_ANIMATION_TITLE />
                    <div className='py-20 -px-0 -mt-10 sm:mt-0 md:p-20 ml-4 text-xs sm:text-sm md:text-base text-bold'>
                        <div className='grid grid-row-2 sm:grid-cols-4 grid-flow-col gap-x-2 gap-y-2 md:gap-4'>
                            <div className='col-start-1 col-end-1 row-star-1 row-end-1 space-y-2 md:space-y-1 mb-20' data-aos='fade' data-aos-offset='400' data-aos-duration='1000' data-aos-delay='1000' >
                                <div className={ `${titleSkills} row-start-1 row-end-1` }>{ Data[5].titleSkills[0] }</div>
                                <div className='row-start-2 row-end-2 font-semibold text-coolGray-500'>{ Data[5].Industial[0] }</div>
                                <div className='row-start-3 row-end-3 font-semibold text-coolGray-500'>{ Data[5].Industial[1] }</div>
                                <div className='row-start-4 row-end-4 font-semibold text-coolGray-500'>{ Data[5].Industial[2] }</div>
                                <div className='row-start-5 row-end-5 font-semibold text-coolGray-500'>{ Data[5].Industial[3] }</div>
                                <div className='row-start-6 row-end-6 font-semibold text-coolGray-500'>{ Data[5].Industial[4] }</div>
                            </div>
                            <div className='col-start-2 col-end-2 row-star-1 row-end-1 sm:pt-2 space-y-2 mt-11' data-aos='fade' data-aos-offset='350' data-aos-duration='1000' data-aos-delay='1000' >
                                <div className='row-start-2 row-end-2 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-3 row-end-3 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-4 row-end-4 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-5 row-end-5 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-6 row-end-6 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                            </div>

                            <div className='col-start-1 col-end-1 row-star-2 row-end-2 space-y-2 md:space-y-1' data-aos='fade-up' data-aos-offset='350' data-aos-duration='1000' data-aos-delay='1500' >
                                <div className={ `${titleSkills} row-start-7 row-end-7`}>{ Data[5].titleSkills[1] }</div>
                                <div className='row-start-8 row-end-8 font-semibold text-coolGray-500'>{ Data[5].Programing[0] }</div>
                                <div className='row-start-9 row-end-9 font-semibold text-coolGray-500'>{ Data[5].Programing[1] }</div>
                                <div className='row-start-10 row-end-10 font-semibold text-coolGray-500'>{ Data[5].Programing[2] }</div>
                                <div className='row-start-11 row-end-11 font-semibold text-coolGray-500'>{ Data[5].Programing[3] }</div>
                                <div className='row-start-12 row-end-12 font-semibold text-coolGray-500'>{ Data[5].Programing[4] }</div>
                                <div className='row-start-13 row-end-13 font-semibold text-coolGray-500'>{ Data[5].Programing[5] }</div>
                                <div className='row-start-14 row-end-14 font-semibold text-coolGray-500'>{ Data[5].Programing[6] }</div>
                                <div className='row-start-15 row-end-15 font-semibold text-coolGray-500'>{ Data[5].Programing[7] }</div>
                                <div className='row-start-16 row-end-16 font-semibold text-coolGray-500'>{ Data[5].Programing[8] }</div>
                                <div className='row-start-17 row-end-17 font-semibold text-coolGray-500'>{ Data[5].Programing[9] }</div>
                            </div>
                            <div className='col-start-2 col-end-2 row-star-2 row-end-2 space-y-2 sm:pt-2 sm:mt-11' data-aos='fade-up' data-aos-offset='300' data-aos-duration='1000' data-aos-delay='1500' >
                                <div className='row-start-8 row-end-8 flex space-x-1 md:space-x-2 mt-11 sm:mt-0'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-9 row-end-9 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-10 row-end-10 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-11 row-end-11 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-12 row-end-12 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-13 row-end-13 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-14 row-end-14 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-15 row-end-15 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-16 row-end-16 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-17 row-end-17 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                            </div>

                            <div className='col-start-1 col-end-1 row-star-3 row-end-3 sm:col-start-3 sm:col-end-3 sm:row-star-1 sm:row-end-1 space-y-2 md:space-y-1 ml-0 sm:ml-4 mt-16 sm:mt-0' data-aos='fade-left' data-aos-offset='400' data-aos-duration='1000' data-aos-delay='1500' >
                                <div className={ `${titleSkills} row-start-1 row-end-1` }>{ Data[5].titleSkills[2] }</div>
                                <div className='row-start-2 row-end-2 font-semibold text-coolGray-500'>{ Data[5].Language[0] }</div>
                                <div className='row-start-3 row-end-3 font-semibold text-coolGray-500'>{ Data[5].Language[1] }</div>
                            </div>
                            <div className='col-start-2 col-end-2 row-star-3 row-end-3 sm:col-start-4 sm:col-end-4 sm:row-star-1 sm:row-end-1 space-y-2 pt-1 mt-25 sm:mt-11' data-aos='fade-left' data-aos-offset='350' data-aos-duration='1000' data-aos-delay='1500' >
                                <div className='row-start-2 row-end-2 flex'>
                                    <S_FC_CREATE_SKILLS_BALLS activeSkillBall={activeSkillBall} emptySkillBall={emptySkillBall} valueActive={5} valueEmpty={0} />
                                </div>
                                <div className='row-start-3 row-end-3 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                            </div>

                            <div className='col-start-1 col-end-1 row-star-4 row-end-4 sm:col-start-3 sm:col-end-3 sm:row-star-2 sm:row-end-2 space-y-2 md:space-y-1 ml-0 sm:ml-4 mt-16 sm:mt-0' data-aos='fade-up-left' data-aos-offset='350' data-aos-duration='1000' data-aos-delay='1500' >
                                <div className={ `${titleSkills} row-start-1 row-end-1` }>{ Data[5].titleSkills[3] }</div>
                                <div className='row-start-2 row-end-2 font-semibold text-coolGray-500'>{ Data[5].Other[0] }</div>
                                <div className='row-start-3 row-end-3 font-semibold text-coolGray-500'>{ Data[5].Other[1] }</div>
                                <div className='row-start-4 row-end-4 font-semibold text-coolGray-500'>{ Data[5].Other[2] }</div>
                                <div className='row-start-5 row-end-5 font-semibold text-coolGray-500'>{ Data[5].Other[3] }</div>
                                <div className='row-start-6 row-end-6 font-semibold text-coolGray-500'>{ Data[5].Other[4] }</div>
                                <div className='row-start-7 row-end-7 font-semibold text-coolGray-500'>{ Data[5].Other[5] }</div>
                            </div>
                            <div className='col-start-2 col-end-2 row-star-4 row-end-4 sm:col-start-4 sm:col-end-4 sm:row-star-2 sm:row-end-2 space-y-2 pt-1 mt-25 sm:mt-11' data-aos='fade-up-left' data-aos-offset='300' data-aos-duration='1000' data-aos-delay='1500' >
                                <div className='row-start-4 row-end-4 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-5 row-end-5 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-6 row-end-6 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-7 row-end-7 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-8 row-end-8 flex space-x-1 md:space-x-2'>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ activeSkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                    <div className={ emptySkillBall }></div>
                                </div>
                                <div className='row-start-9 row-end-9 flex space-x-1 md:space-x-2'>
                                    <S_FC_CREATE_SKILLS_BALLS activeSkillBall={activeSkillBall} emptySkillBall={emptySkillBall} valueActive={5} valueEmpty={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}