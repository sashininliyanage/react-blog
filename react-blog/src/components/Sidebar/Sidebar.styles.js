import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 3;
    padding-left: 50px;

    .customStyles{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
    
    .sticky{
        position: -webkit-sticky;
        position: sticky;
        top: 100px;
    }

    @media screen and (max-width:768px){
        display: block;
        flex:3;
    }
`;

export const Category = styled.div`
    margin: 5px;
    padding: 5px;
    border-radius: 3px;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 50px;
    justify-content: center;

    div:nth-child(4n+0) {
        background: #D3E4CD;
    }
    div:nth-child(4n+1) {
        background: #F2DDC1;
    }

    div:nth-child(4n+2) {
    background: #F5EEDC;
    }

    div:nth-child(4n+3) {
    background: #E4CDA7;
    }
`