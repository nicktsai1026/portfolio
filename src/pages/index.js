import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  ProjectsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import ExperienceSection from '../components/experience';

export default function IndexPage() {
  return (
    <>
      <Seo title="Nick Tsai Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ExperienceSection sectionId="experience" heading="Experience"/>
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="My Projects" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
