import styled from 'styled-components';


export const Theme = styled.div`
    background-color:rgba(11, 45, 80, ${({ opacity }) => opacity<250?(opacity/250):1}) ;
    /* background-color: var(--darkColor);
    opacity: ${({ opacity }) => opacity<250?(opacity/250):1}; */

    .navbar-brand{
        color:rgba(255, 255, 255, ${({ opacity }) => (opacity<250)?(0):1}) ;
    }

    padding: 10px 50px;

    @media screen and (max-width:768px){
        padding: 10px 5%;
    }
`;
