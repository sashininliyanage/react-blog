import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    padding: 100px 50px;

    .header{
        max-height: 300px;
        object-fit: cover;
    }

    .customBtn{
        width: 20%;
        min-width: fit-content;
        max-width: 150px;
        color: white;
        background-color: var(--darkColor);
    }

    @media screen and (max-width:768px){
        padding: 100px 5%;
    }
`;
