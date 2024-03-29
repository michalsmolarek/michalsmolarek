import React from 'react';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { Project } from 'gatsby-theme-portfolio-minimal/src/components/Project';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/Projects/data';
import * as classes from './style.module.css';

export function ProjectsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allProjectsJson.sections[0];

    return (
        <Animation type="fadeIn">
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.Projects]}>
                    {data.projects.map((project, key) => {
                        return project.visible ? <Project key={key} index={key} data={project} /> : null;
                    })}
                </Slider>
                {data.button !== undefined && data.button.visible !== false && (
                    <Animation className={classes.MoreProjects} type="fadeIn">
                        <Button
                            type={ButtonType.LINK}
                            externalLink={true}
                            url="https://play.google.com/store/apps/details?id=pl.michalsmolarek.todoey"
                            label="Play Store"
                        />
                             <Button
                            type={ButtonType.LINK}
                            externalLink={true}
                            url="https://apps.apple.com/pl/app/tu-du/id1658384299?l=pl"
                            label="App Store"
                        />
                      
                    </Animation>
                )}
            </Section>
        </Animation>
    );
}
