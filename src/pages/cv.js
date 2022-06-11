import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function CvPage() {
  return (
    <>
      <Seo title="CV - Michał Smolarek" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="cv" heading="CV" />
      </Page>
    </>
  );
}
