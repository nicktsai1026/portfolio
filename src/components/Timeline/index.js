import React from "react";
import * as Styled from './styles';

export const Timeline = ({period, company, title, website}) => {
    return (
        <Styled.Timeline>
            <Styled.Point />
            <Styled.Details>
            <Styled.Date>
                {period}
            </Styled.Date>
            <Styled.Title>{company}</Styled.Title>
            <Styled.Subtitle>{title}</Styled.Subtitle>
            </Styled.Details>
            <Styled.Content>{website}</Styled.Content>
        </Styled.Timeline>
    );
}

