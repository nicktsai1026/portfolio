import { useStaticQuery, graphql } from "gatsby";

export const ExperienceDataSource = () => {
    return (
        useStaticQuery(graphql`
            query ExperienceSectionQuery {
                experienceJson {
                    companies {
                        duties
                        name
                        period
                        title
                        website
                    }
                }
            }
        `)
    );
};