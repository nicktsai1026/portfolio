import React from "react";
import { Animation, Section } from "gatsby-theme-portfolio-minimal";

export default function AboutSection(props) {
  return (
    <Animation type="fadeUp">
        <Section anchor={props.sectionId} heading={props.heading}>
            <p>This is my experience section.</p>
        </Section>
    </Animation>
  );
}
