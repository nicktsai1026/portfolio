import React from "react";
import { Animation, Section } from "gatsby-theme-portfolio-minimal";
import { ExperienceDataSource } from "./data";
import { Timeline } from "../components/Timeline";

export default function AboutSection(props) {
    const companies = ExperienceDataSource().experienceJson.companies;

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                {companies.map((company, index) => (
                    <Timeline company={company} key={index}/>
                ))}
            </Section>
        </Animation>
    );
}