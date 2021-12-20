import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    padding: 100px 50px;
    display: flex;

    @media screen and (max-width:768px){
        padding: 100px 5%;
        display: block;
    }

    .btn{
        min-width: 80px;
    }
`;

export const Content = styled.div`
    flex: 9;
`;

export const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    height: fit-to-content;
    padding: 0 10px;

    i{
        margin: 10px 5px;
        cursor: pointer;
        color: #777;
        text-shadow: 1px 1px 1px white ;
        :hover{
            font-size: 20px;
        }
    }
`
