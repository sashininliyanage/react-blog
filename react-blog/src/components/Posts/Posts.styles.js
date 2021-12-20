import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 9;


    .customStyles{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    @media screen and (max-width:768px){
        flex: 7;
    }
`
export const Title = styled.div`
    margin: 0px;


    font-size: var(--fontBig);    
    font-weight: 600;
    min-height: 40px;

    @media screen and (max-width:768px){
        font-size: var(--fontMed);
    }
`
