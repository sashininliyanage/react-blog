import styled from 'styled-components'
import img from '../../images/header2.jpg'

export const Wrapper = styled.div`
    height:100vh;
    display: flex;
    background-image: url(${img});
    background-size: cover;

    @media screen and (max-width:980px){
        display:block;
    }

    .btn:disabled{
        background-color: #777;
    }

`;

export const Logo = styled.div`
    flex: 1;
    color: white;
    font-family: 'Tangerine', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 120px;
`

export const Form = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    color: var(--darkColor);
    font-weight: 500;
    justify-content: flex-start;

    @media screen and (max-width:980px){
        justify-content: center;
    }

    label{
        margin: 20px 0 10px 0;
    }
    .form-check-input{
        margin: 25px 10px 0 0;
    }
    .btn{
        margin: 20px 0;
        width: 100%;
        color: white;
        background-color: var(--darkColor);
    }

    .card{
        background-color: rgba(255, 255, 255,0.5);
    }

`;
