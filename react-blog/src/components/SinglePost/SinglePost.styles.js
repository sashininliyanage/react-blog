import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    padding: 100px 50px;
    display: flex;

    @media screen and (max-width:700px){
        display: block;
    }
`;

export const Content = styled.div`
    flex: 9;
`;
