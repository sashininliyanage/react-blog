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