import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 3;
    padding-left: 50px;
    
    .customStyles{
        /* overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical; */
        height: 0;
        overflow: hidden;
    }
    
    .sticky{
        position: -webkit-sticky;
        position: sticky;
        top: 100px;
    }

    @media screen and (max-width:600px){
        display: block;
        flex:3;
        padding-top: 50px;
        padding-left: 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 50px;
    justify-content: left;
        
    a{
        margin: 5px;
        padding: 5px;
        border-radius: 3px;
    }
    a:nth-child(4n+0) {
        background: #D3E4CD;
    }
    a:nth-child(4n+1) {
        background: #F2DDC1;
    }

    a:nth-child(4n+2) {
    background: #F5EEDC;
    }

    a:nth-child(4n+3) {
    background: #E4CDA7;
    }
    
`