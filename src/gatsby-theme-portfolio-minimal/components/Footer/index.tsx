import React from "react";
import { Link } from "gatsby";
import logoImg from "../../../../static/white-logo.svg";
import {
  Theme,
  useGlobalState,
} from "gatsby-theme-portfolio-minimal/src/context";
import { useSiteConfiguration } from "gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration";
import * as classes from "./style.module.css";

export function Footer(): React.ReactElement {
  const { globalState } = useGlobalState();
  const siteConfiguration = useSiteConfiguration();
  const darkModeEnabled = globalState.theme === Theme.Dark;

  return (
    <footer
      className={classes.Footer}
      style={{
        background: darkModeEnabled
          ? "var(--background-color)"
          : "var(--primary-color)",
        borderTop: darkModeEnabled
          ? "3px solid var(--box-shadow-hover-color)"
          : undefined,
      }}
    >
      <div className={classes.ContentWrapper}>
        <Link to="/" aria-label="home">
          <img src={logoImg} alt="Logo" className={classes.WhiteLogo} />
        </Link>
        <div className={classes.Links}>
          {siteConfiguration.navigation.footer.map((linkObject, key) => {
            return (
              <Link
                key={key}
                to={linkObject.url}
                aria-label={linkObject.label}
                style={{
                  color: darkModeEnabled
                    ? "var(--primary-color)"
                    : "var(--background-color)",
                }}
              >
                {linkObject.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
