import React from 'react';
import { useSiteConfiguration } from 'gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration';
import * as classes from './style.module.css';
import logo from '../../../../static/logo-ms.svg';
import darkLogo from '../../../../static/ms-logo-white.svg';
import {
    Theme,
    useGlobalState,
  } from "gatsby-theme-portfolio-minimal/src/context";

interface LogoProps {
    fontSize?: string;
    color?: string;
}

export function Logo(props: LogoProps): React.ReactElement {
    const { globalState } = useGlobalState();
    const darkModeEnabled = globalState.theme === Theme.Dark;
    const siteConfiguration = useSiteConfiguration();
    const fontSize = props.fontSize || '2rem';
    const color = props.color || 'var(--primary-color)';

    return (
        <div className={classes.Logo} aria-roledescription="logo" style={{ fontSize, color }}>
             {/* {siteConfiguration.logo.text} */}
              <img className={classes.imglogo}  src={darkModeEnabled ? darkLogo : logo} alt="logo" /> 
            
        </div>
    );
}
