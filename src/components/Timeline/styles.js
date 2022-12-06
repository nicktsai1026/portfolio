import styled from 'styled-components';

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .75rem;
    padding-bottom: 0;
    position: relative;
    border-left: 1px solid rgb(195, 218, 254);

    &:after, &:before {
        box-sizing: border-box;
        border: 0 solid #e2e8f0;
    }

    @media (min-width: 640px) {
        flex-direction: row;
    }
`;

export const Point = styled.span`
    width: .75rem;
    height: .75rem;
    border-radius: 100%;
    border: 1px solid rgb(79, 209, 197);
    background-color: rgb(235, 244, 255);
    position: absolute;
    left: -6px;
    top: 20px;
`;

export const Details = styled.div`
    width: 100%;

    @media (min-width: 640px) {
        width: 30%;
    }
`;

export const Date = styled.label`
    font-size: .75rem;
    border: 1px solid rgb(79, 209, 197);
    border-radius: 9999px;
    padding: .2rem .5rem;
    width: fit-content;
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: .5rem;
    margin-left: .5rem;
`;

export const Subtitle = styled.a`
    font-size: 1rem;
    margin-left: .3rem;
    color: var(--code-block-keyword);

    &:hover {
        box-shadow: inset 0 -0.5em 0 var(--code-block-fun);
        transition: box-shadow 0.3s ease-out;
    }
`;

export const Content = styled.div`
    width: 100%;
    position: relative;
    
    @media (min-width: 640px) {
        width: 66%;
    }
    
    li {
        list-style: none;
        padding-left: 1rem;
        margin-bottom: .5rem;

      &:before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: var(--green);
    }
`;
