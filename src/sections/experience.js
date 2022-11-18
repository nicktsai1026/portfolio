import React from "react";
import { Animation, Section } from "gatsby-theme-portfolio-minimal";
import { ExperienceDataSource } from "./data";
import { Timeline } from "../components/Timeline";

export default function AboutSection(props) {
    const companies = ExperienceDataSource().experienceJson.companies;

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                {companies.map(company => (
                    <div>
                        <Timeline period={company.period} company={company.name} title={company.title} website={company.website} />
                        <h2>Company: {company.name}</h2>
                        <h4>Title: {company.title}</h4>
                        <label>{company.period}</label>
                        <ul>
                            {company.duties.map(duty => (
                                <li>{duty}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Section>
        </Animation>
    );
}