import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    padding: 100px 50px;
    display: flex;

    @media screen and (max-width:768px){
        padding: 100px 5%;
        display: block;
    }
`;

export const Content = styled.div`
    flex: 9;
`;
