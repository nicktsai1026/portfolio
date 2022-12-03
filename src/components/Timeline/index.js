import React from "react";
import * as Styled from './styles';

export const Timeline = ({company}) => {
    return (
        <Styled.Timeline>
            <Styled.Point />
            <Styled.Details>
                <Styled.Date>
                    {company.period}
                </Styled.Date>
                <Styled.Title>{company.name}</Styled.Title>
                <Styled.Subtitle>{company.title}</Styled.Subtitle>
            </Styled.Details>
            <Styled.Content>
                {company.duties.map((duty, index) => (
                    <li key={index}>{duty}</li>
                ))}
            </Styled.Content>
        </Styled.Timeline>
    );
}

