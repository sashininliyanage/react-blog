import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background: var(--darkColor) ;
    position:sticky;
    height: 1000px;
    color: var(--white);
    display: flex;
    align-items: center;

    i{
        
        font-size:var(--fontBig);
        cursor: pointer;
        padding-right: 20px;
    }

    .topLeft, .topRight{
        flex:2;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .topCenter{
        flex:6;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        border: 2px solid green;
    }
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Li = styled.li`
    margin-right: 20px;
    font-size: var(--fontBig);
`;
