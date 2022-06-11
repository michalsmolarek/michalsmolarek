import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/About/data';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import * as classes from './style.module.css';
import aboutImage from '../../../../content/images/about-img.svg';

export function AboutSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allAboutMarkdown.sections[0];

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.About}>
                    <div className={classes.Description} dangerouslySetInnerHTML={{ __html: data.html }} />
                    <Animation type="fadeLeft" delay={200}>
                        <div className={classes.ImageWrapper}>
                           <img src={aboutImage} className={classes.ImageWrapper} alt={data.frontmatter.imageAlt} />
                        </div>
                    </Animation>
                </div>
            </Section>
        </Animation>
    );
}
