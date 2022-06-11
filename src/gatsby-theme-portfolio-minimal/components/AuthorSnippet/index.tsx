import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useSiteMetadata } from 'gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata';
import * as classes from './style.module.css';
import headImage from '../../../../static/head.svg';

export function AuthorSnippet(): React.ReactElement {
    const { author, avatar, bio } = useSiteMetadata();
    return (
        <div className={classes.AuthorSnippet}>
            <img src={headImage} />
            <div className={classes.Description}>
                <span className={classes.WrittenBy}>
                    Napisane przez <u>{author}</u>
                </span>
                <p className={classes.Bio}>{bio}</p>
            </div>
        </div>
    );
}
