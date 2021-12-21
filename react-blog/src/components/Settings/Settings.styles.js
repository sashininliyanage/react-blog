import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: 80px 50px 20px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width:768px){
        padding: 100px 5%;
    }
    
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 20px;

    input{
        width: 80%;
        margin-bottom: 5px;
    }

    img{
        cursor: pointer;
    }
    .profpic{
        height: 200px;
        width: 200px;
        border: 2px solid var(--darkColor);
        border-radius:100%;
        object-fit: cover;
    }

    @media screen and (max-width:400px){
        input{
            width: 100%;
        }

        .profpic{
            width: 100px;
            height: 100px;
        }  
    }

`;

export const Buttons = styled.div`

    .btn{
        background-color: var(--darkColor);
        color: white;
        min-width: 120px;
        margin: 20px 10px;
        max-width: 200px;
    }

    @media screen and (max-width:400px){
        display: flex;
        flex-direction: column;
        align-items: center;

        .btn{
        margin: 5px;
        }
    }
`
