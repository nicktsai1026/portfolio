import React from "react";
import { Animation, Section } from "gatsby-theme-portfolio-minimal";

export default function AboutSection(props) {
  return (
    <Animation type="fadeUp">
        <Section anchor={props.sectionId} heading={props.heading}>
            <ul>
                <li>Focused on developing and revamping the website & mobile app, including UI/UX and SEO performance optimization.</li>
                <li>Involved in developing and maintaining Amazon Lambda, CloudFront, EC2, RDS, Elastic Load Balancing, and other services of the AWS infrastructure.</li>
                <li>Collaborated closely with other developers to develop new features and deliver on time.</li>
                <li>Participated in back-end development, including RESTful APIs, database, and internal admin system.</li>
                <li>Contributed implementation of the automation testing feature on CI/CD by using Cypress.</li>
            </ul>
        </Section>
    </Animation>
  );
}
