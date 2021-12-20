import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    padding: 30px 50px;
    display: flex;

    @media screen and (max-width:768px){
        padding: 30px 5%;
    }
    
    @media screen and (max-width:600px){
        display: block;
    }
`;
