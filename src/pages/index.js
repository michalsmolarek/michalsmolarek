import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Michał Smolarek | Mobile Dev" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Artykuły" sources={['Blog']} />
        <AboutSection sectionId="about" heading="O mnie" />
        <InterestsSection sectionId="Technologie" heading="Technologie" />
        <ProjectsSection sectionId="features" heading="Tu-Du" />
        <ContactSection sectionId="github" heading="Kontakt" />
      </Page>
    </>
  );
}
