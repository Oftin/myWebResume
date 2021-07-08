import React, { Component, Fragment } from 'react';
import { EducationSection } from './Education/EducationSection';
import { ExperienceSection } from './Experience/ExperienceSection';
import { AddictionalActivitiesSection } from './AddictionalActivities/AddictionalActivitiesSection';
import { SkillsSection } from './Skills/SkillsSection';
import { InterestsSection } from './Interests/InterestsSection';
import { ContactSection } from './Contact/ContactSection';

export class MainConnector extends Component {
    render(){
        return (
            <Fragment>
                <EducationSection />
                <ExperienceSection />
                <AddictionalActivitiesSection />
                <SkillsSection />
                <InterestsSection />
                <ContactSection />
            </Fragment>
        )
    }
}